import {
	ItemWrapper,
	ListHeaders,
} from '../TrainingBookList/TrainingBookList.styled';
import { booksId, endDate, getBooks, startDate } from 'Redux/Planning/planningSelectors';
import {  startPlanning } from 'Redux/Planning/planningOperations';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as TrashIcon } from 'Assets/svg/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { clean } from 'Redux/Planning/planningSlice';


const TrainingBookList = () => {
	let books= useSelector(getBooks);
	const dispatch = useDispatch();
	const ids = useSelector(booksId);
	const finishValue = useSelector(endDate)
	const startValue = useSelector(startDate)
const click =(_id)=>{
	const del = ids.filter(id=>id !==_id)
					if(del.length===0){
						dispatch(clean([]))
						return
					}
					dispatch(startPlanning({
					startDate: startValue,
					endDate: finishValue,
					books: del}))
					console.log(del)
}
	console.log(ids)
	

	return (
		<div>
			<ListHeaders>
				<span>Book Title</span>
				<span>Author</span>
				<span>Year</span>
				<span>Pages</span>
			</ListHeaders>

			<ul id='planning-list'>
				{books.length!==0&&books.map(({ title, author, publishYear, pagesTotal, _id }) => (
					<li key={_id}>
						<ItemWrapper>
							<BookIcon fill={{}} width={22} height={17} />
							<span>{title}</span>
							<span>{author}</span>
							<span>{publishYear}</span>
							<span>{pagesTotal}</span>
							<span onClick={()=>click(_id)}>
								<TrashIcon fill="black" width={22} height={17} />
							</span>
						</ItemWrapper>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TrainingBookList;
