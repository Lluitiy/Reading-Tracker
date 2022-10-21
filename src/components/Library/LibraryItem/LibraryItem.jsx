import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import createRatingStars from 'Utils/RatingStars';
import { ItemWrapper, StarList } from './LibraryItem.styled';
const LibraryItem = ({ title, author, publishYear, fill, pagesTotal }) => {
	return (
		<ItemWrapper>
			<BookIcon fill={fill} width={22} height={17} />
			<span>{title}</span>
			<span>{author}</span>
			<StarList>{createRatingStars(2)}</StarList>
			<span>{publishYear}</span>
			<span>{pagesTotal}</span>
		</ItemWrapper>
	);
};
export default LibraryItem;
