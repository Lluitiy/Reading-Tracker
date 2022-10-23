import BOOK_CATEGORY from 'components/Constants/bookCategories';
import MobileLibraryItem from '../MobileLibraryItem/MobileLibraryItem';
import LibraryItem from '../LibraryItem/LibraryItem';
import { Container, Section } from 'components/Common/Common.styled';
import { useMediaQuery } from 'react-responsive';
import { Header } from './LibraryList.styled';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getBooksByCategory } from 'Redux/Books/booksSelectors';
import ListHeaders from '../ListHeaders/ListHeaders';
import FinishedReadingListHeaders from '../FinishedReadingListHeaders/FinishedReadingListHeaders';
import useTranslation from 'Hooks/useTranslations';

const LibraryList = ({ category }) => {
	const translation = useTranslation();
	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
	const fill = useMemo(
		() => (category === BOOK_CATEGORY.currentlyReading ? '#FF6B08' : '#A6ABB9'),
		[category]
	);

	const books = useSelector(getBooksByCategory(category));
	const isFinishedReadingList = category === BOOK_CATEGORY.finishedReading;

	return (
		!!books.length && (
			<Section>
				<Container>
					<Header>{translation.libraryListHeaders[category]}</Header>
					{isDesktopOrTablet && (
						<>
							{isFinishedReadingList ? (
								<FinishedReadingListHeaders />
							) : (
								<ListHeaders />
							)}
						</>
					)}
					<ul>
						{books.map(
							({
								title,
								author,
								publishYear,
								rating = 0,
								pagesTotal,
								_id: id,
							}) => {
								return (
									<li key={id}>
										{' '}
										{isDesktopOrTablet ? (
											<LibraryItem
												rating={rating}
												title={title}
												author={author}
												publishYear={publishYear}
												pagesTotal={pagesTotal}
												fill={fill}
												isFinishedReading={isFinishedReadingList}
												id={id}
											/>
										) : (
											<MobileLibraryItem
												rating={rating}
												title={title}
												author={author}
												publishYear={publishYear}
												pagesTotal={pagesTotal}
												fill={fill}
												isFinishedReading={isFinishedReadingList}
												id={id}
											/>
										)}
									</li>
								);
							}
						)}
					</ul>
				</Container>
			</Section>
		)
	);
};
export default LibraryList;
