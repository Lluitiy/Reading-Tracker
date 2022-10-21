import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import createRatingStars from 'Utils/RatingStars';
import { BookTitle, Button, FinishedReadingItemWrapper, ItemWrapper, StarList } from './LibraryItem.styled';
const LibraryItem = ({
	title,
	author,
	publishYear,
	fill,
	pagesTotal,
	isFinishedReading,
}) => {
	console.log(isFinishedReading);
	return isFinishedReading ? (
		<FinishedReadingItemWrapper>
			<BookIcon fill={fill} width={22} height={17} />
			<BookTitle>{title}</BookTitle>
			<span>{author}</span>
			<span>{publishYear}</span>
			<span>{pagesTotal}</span>
			<StarList>{createRatingStars(3)}</StarList>
			<Button>Resume</Button>
		</FinishedReadingItemWrapper>		
	) : (
		<ItemWrapper>
			<BookIcon fill={fill} width={22} height={17} />
			<BookTitle>{title}</BookTitle>
			<span>{author}</span>
			<span>{publishYear}</span>
			<span>{pagesTotal}</span>
		</ItemWrapper>
	);
};
export default LibraryItem;
