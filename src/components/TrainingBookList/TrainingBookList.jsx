import {
	ItemWrapper,
	ListHeaders,
} from '../TrainingBookList/TrainingBookList.styled';
// import React, { useEffect } from 'react';
import { booksId, endDate, getBooks, startDate } from 'Redux/Planning/planningSelectors';
// import { getcurrentPlanning } from 'Redux/Planning/planningOperations';
import {  startPlanning } from 'Redux/Planning/planningOperations';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as TrashIcon } from 'Assets/svg/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { addId } from 'Redux/Planning/planningSlice';

// import { getAccessToken } from 'Redux/Auth/authSelectors';

const TrainingBookList = () => {
	let books= useSelector(getBooks);
	// const token = useSelector(getAccessToken);

	const dispatch = useDispatch();
	const ids = useSelector(booksId);
	const finishValue = useSelector(endDate)
	const startValue = useSelector(startDate)

	// useEffect(() => {
	// 	if (token) {
	// 		dispatch(getcurrentPlanning());
	// 	}
	// }, [dispatch, token]);

	return (
		<div>
			<ListHeaders>
				<span>Book Title</span>
				<span>Author</span>
				<span>Year</span>
				<span>Pages</span>
			</ListHeaders>

			<ul id='planning-list'>
				{books?.map(({ title, author, publishYear, pagesTotal, _id }) => (
					<li key={_id}>
						<ItemWrapper>
							<BookIcon fill={{}} width={22} height={17} />
							<span>{title}</span>
							<span>{author}</span>
							<span>{publishYear}</span>
							<span>{pagesTotal}</span>
							<span onClick={() => 
					{
				    const del = ids.filter(id=>id !==_id)
					if(del.length===0){
						document.querySelector('#planning-list').innerHTML = ''
						return
					}
					dispatch(startPlanning({
					startDate: startValue,
					endDate: finishValue,
					books: del}))
					// dispatch(addId(del))
					console.log(del)
					}}>
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
