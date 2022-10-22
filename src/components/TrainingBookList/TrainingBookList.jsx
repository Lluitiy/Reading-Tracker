import {
	ItemWrapper,
	ListHeaders,
	List,
} from '../TrainingBookList/TrainingBookList.styled';

import {
	booksId,
	endDate,
	getBooks,
	startDate,
} from 'Redux/Planning/planningSelectors';
import { startPlanning } from 'Redux/Planning/planningOperations';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as TrashIcon } from 'Assets/svg/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { clean } from 'Redux/Planning/planningSlice';

const TrainingBookList = () => {
	let books = useSelector(getBooks);
	const dispatch = useDispatch();
	const ids = useSelector(booksId);
	const finishValue = useSelector(endDate);
	const startValue = useSelector(startDate);

	const click = _id => {
		const del = ids.filter(id => id !== _id);
		if (del.length === 0) {
			dispatch(clean([]));
			return;
		}
		dispatch(
			startPlanning({
				startDate: startValue,
				endDate: finishValue,
				books: del,
			})
		);
	};

	return (
		<div>
			<ListHeaders>
				<span>Book Title</span>
				<span>Author</span>
				<span>Year</span>
				<span>Pages</span>
			</ListHeaders>
			<List id="planning-list">
				{books.length !== 0 &&
					books?.map(({ title, author, publishYear, pagesTotal, _id }) => (
						<li key={_id}>
							<ItemWrapper>
								<BookIcon width={22} height={17} />
								<span>{title}</span>
								<span>{author}</span>
								<span>{publishYear}</span>
								<span>{pagesTotal}</span>
								<span onClick={() => click(_id)}>
									<TrashIcon width={22} height={17} />
								</span>
							</ItemWrapper>
						</li>
					))}
			</List>
		</div>
	);
};

export default TrainingBookList;
