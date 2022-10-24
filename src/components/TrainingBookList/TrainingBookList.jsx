import {
	ItemWrapper,
	ListHeaders,
	List,
	CheckBox,
	TrashButton,
} from '../TrainingBookList/TrainingBookList.styled';
import {
	booksId,
	endDate,
	getBooks,
	showResultsSection,
	startDate,
} from 'Redux/Planning/planningSelectors';
import { startPlanning } from 'Redux/Planning/planningOperations';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { ReactComponent as TrashIcon } from 'Assets/svg/delete.svg';
import { ReactComponent as CheckIcon } from 'Assets/svg/CheckBox.svg';
import { useDispatch, useSelector } from 'react-redux';
import { clean } from 'Redux/Planning/planningSlice';
import useTranslation from 'Hooks/useTranslations';
import MobileTrainingBookItem from 'components/MobileTrainingBookItem/MobileTrainingBookItem';

const TrainingBookList = ({isMobile}) => {
	const translation = useTranslation();
	let books = useSelector(getBooks);
	const dispatch = useDispatch();
	const ids = useSelector(booksId);
	const finishValue = useSelector(endDate);
	const startValue = useSelector(startDate);
	const isShowResultsSection = useSelector(showResultsSection);

	const handleClick = _id => {
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
			{!isMobile && <ListHeaders>
				<span>{translation.trainingBookList.title}</span>
				<span>{translation.trainingBookList.author}</span>
				<span>{translation.trainingBookList.year}</span>
				<span>{translation.trainingBookList.pages}</span>
			</ListHeaders>}
			<List id="planning-list">
				{books.length !== 0 &&
					books?.map(
						({
							title,
							author,
							publishYear,
							pagesTotal,
							_id,
							pagesFinished,
						}) => {
							return (
							<li key={_id}>
								{isMobile ?
									<MobileTrainingBookItem
										handleDelete={handleClick}
										title={title}
										author={author}
										publishYear={publishYear}
										pagesTotal={pagesTotal}
										pagesFinished={pagesFinished}
										id={_id}
									/>
									:
									<ItemWrapper>
									{!isShowResultsSection && (
										<BookIcon fill="#A6ABB9" width={22} height={17} />
									)}
									{isShowResultsSection && (
										<CheckBox>
											{pagesFinished === pagesTotal ? (
												<input type="checkbox" id={_id} checked disabled />
											) : (
												<input type="checkbox" id={_id} disabled />
											)}
											<label htmlFor={_id}>
												<CheckIcon />
											</label>
										</CheckBox>
									)}
									<span>{title}</span>
									<span>{author}</span>
									<span>{publishYear}</span>
									<span>{pagesTotal}</span>
									{!isShowResultsSection && (
										<TrashButton type='button' onClick={() => handleClick(_id)}>
											<TrashIcon width={22} height={17} />
										</TrashButton>
									)}
								</ItemWrapper>}
							</li>
						)}
					)}
			</List>
		</div>
	);
};

export default TrainingBookList;
