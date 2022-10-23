// import getHeading from 'Utils/getHeading';
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

// const finishedBooks = [
// 	{
// 		author: 'Rilke',
// 		pagesFinished: 0,
// 		pagesTotal: 267,
// 		publishYear: 1999,
// 		title: 'Poetry',
// 		rating: 3,
// 		_id: '63510c853551fd60da50fce2',
// 	},
// 	{
// 		author: 'Proust ggggg gggggggggg ggggggggggggg',
// 		pagesFinished: 0,
// 		pagesTotal: 56,
// 		publishYear: 1999,
// 		title: 'Lost gggggggggggggggggggggggggggggtime',
// 		rating: 5,
// 		_id: '63510c853551fd50fce2',
// 	},
// ];

const LibraryList = ({ category }) => {
	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
	const fill = useMemo(
		() =>
			category === BOOK_CATEGORY.currentlyReading
				? theme.colors.brand
				: '#A6ABB9',
		[category]
	);
	// const heading = (category) => {
	// 	switch (category) {
	// 	case BOOK_CATEGORY.goingToRead:
	// 		return 'Going to read';
	// 	case BOOK_CATEGORY.currentlyReading:
	// 		return 'Reading now';
	// 	case BOOK_CATEGORY.finishedReading:
	// 		return 'Already read';
	// 	default:
	// 		return 'Other';
	// }
	// }

	const heading = useMemo(() => {
		switch (category) {
			case BOOK_CATEGORY.goingToRead:
				return 'Going to read';
			case BOOK_CATEGORY.currentlyReading:
				return 'Reading now';
			case BOOK_CATEGORY.finishedReading:
				return 'Already read';
			default:
				return 'Other';
		}
	}, [category]);

	
	const books = useSelector(getBooksByCategory(category));
	const isFinishedReadingList = category === BOOK_CATEGORY.finishedReading;

	// const isFinishedReadingList = true;

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
						{books.map(
							({ title, author, publishYear,rating= 0, pagesTotal, _id: id }) => {
								
								return(
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
							)}
						)}
					</ul>
				</Container>
			</Section>
		)
	);
};
export default LibraryList;
