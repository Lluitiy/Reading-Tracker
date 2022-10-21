import getHeading from 'Utils/getHeading';
import BOOK_CATEGORY from 'components/Constants/bookCategories';
import MobileLibraryItem from '../MobileLibraryItem/MobileLibraryItem';
import LibraryItem from '../LibraryItem/LibraryItem';
import { Container, Section } from 'components/Common/Common.styled';
import { useMediaQuery } from 'react-responsive';
import { Header} from './LibraryList.styled';
import { theme } from 'components/Constants/theme';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getBooksByCategory } from 'Redux/Books/booksSelectors';
import ListHeaders from '../ListHeaders/ListHeaders';
import FinishedReadingListHeaders from '../FinishedReadingListHeaders/FinishedReadingListHeaders';

const finishedBooks = [
	{
		author: 'Rilke',
		pagesFinished: 0,
		pagesTotal: 267,
		publishYear: 1999,
		title: 'Poetry',
		rating: 3,
		_id: '63510c853551fd60da50fce2',
	},
	{
		author: 'Proust ggggg gggggggggg ggggggggggggg',
		pagesFinished: 0,
		pagesTotal: 56,
		publishYear: 1999,
		title: 'Lost gggggggggggggggggggggggggggggtime',
		rating: 5,
		_id: '63510c853551fd50fce2',
	},
];

const LibraryList = ({ category }) => {
	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
	const fill = useMemo(
		() =>
			category === BOOK_CATEGORY.currentlyReading
				? theme.colors.brand
				: '#A6ABB9',
		[category]
	);
	const heading = useMemo(() => getHeading(category), [category]);
	const books = useSelector(getBooksByCategory(category));
	// const isFinishedReadingList = category === BOOK_CATEGORY.finishedReading;
	const isFinishedReadingList = true;

	return (
		!!books.length && (
			<Section>
				<Container>
					<Header>{heading}</Header>
					{isDesktopOrTablet && (
						<>{isFinishedReadingList ?
							<FinishedReadingListHeaders/>:
							<ListHeaders/>}
						</>
					)}
					<ul>
						{/* here must be books */}
						{finishedBooks.map(
							({ title, author, publishYear, pagesTotal, _id }) => (
								<li key={_id}>
									{' '}
									{isDesktopOrTablet ? (
										<LibraryItem
											title={title}
											author={author}
											publishYear={publishYear}
											pagesTotal={pagesTotal}
											fill={fill}
											isFinishedReading={isFinishedReadingList}
										/>
									) : (
										<MobileLibraryItem
											title={title}
											author={author}
											publishYear={publishYear}
											pagesTotal={pagesTotal}
											fill={fill}
											isFinishedReading={isFinishedReadingList}
										/>
									)}
								</li>
							)
						)}
					</ul>
				</Container>
			</Section>
		)
	);
};
export default LibraryList;
