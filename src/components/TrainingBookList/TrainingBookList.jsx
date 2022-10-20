import {
	ItemWrapper,
	ListHeaders,
} from '../TrainingBookList/TrainingBookList.styled';
// import React, { useEffect } from 'react';
import { getBooks } from 'Redux/Planning/planningSelectors';
// import { getcurrentPlanning } from 'Redux/Planning/planningOperations';
import { deletePlanningBook } from 'Redux/Planning/planningOperations';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as TrashIcon } from 'Assets/svg/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
// import { getAccessToken } from 'Redux/Auth/authSelectors';

const TrainingBookList = () => {
	const books = useSelector(getBooks);
	// const token = useSelector(getAccessToken);

	const dispatch = useDispatch();

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
			<ul>
				{books?.map(({ title, author, publishYear, pagesTotal, _id }) => (
					<li key={_id}>
						<ItemWrapper>
							<BookIcon fill={{}} width={22} height={17} />
							<span>{title}</span>
							<span>{author}</span>
							<span>{publishYear}</span>
							<span>{pagesTotal}</span>
							<span onClick={() => dispatch(deletePlanningBook(_id))}>
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
