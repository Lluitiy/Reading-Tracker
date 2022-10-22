import {
	ItemWrapper,
	ListHeaders,
	List,
} from '../TrainingBookList/TrainingBookList.styled';
import React from 'react'; // useEffect
import { getBooks } from 'Redux/Planning/planningSelectors';

import { ReactComponent as BookIcon } from 'Assets/svg/flat.svg';
import { ReactComponent as TrashIcon } from 'Assets/svg/delete.svg';
import { useSelector } from 'react-redux';

const TrainingBookList = () => {
	const books = useSelector(getBooks);

	return (
		<div>
			<ListHeaders>
				<span>Book Title</span>
				<span>Author</span>
				<span>Year</span>
				<span>Pages</span>
			</ListHeaders>
			<List>
				{books?.map(({ title, author, publishYear, pagesTotal, _id }) => (
					<li key={_id}>
						<ItemWrapper>
							<BookIcon width={22} height={17} />
							<span>{title}</span>
							<span>{author}</span>
							<span>{publishYear}</span>
							<span>{pagesTotal}</span>
							<span
							// onClick={() => dispatch(getcurrentPlanning())}
							>
								<TrashIcon fill="black" width={22} height={17} />
							</span>
						</ItemWrapper>
					</li>
				))}
			</List>
		</div>
	);
};

export default TrainingBookList;
