import {
	MobileItemWrapper,
	IconThumb,
	Table,
	TableRow,
	TableHeader,
	TableDetail,
} from './MobileLibraryItem.styled';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import { Button, OverflowText, StarList } from '../LibraryItem/LibraryItem.styled';
import createRatingStars from 'Utils/RatingStars';

const MobileLibraryItem = ({
	title,
	author,
	publishYear,
	fill,
	pagesTotal,
	isFinishedReading
}) => {
	return (
		<MobileItemWrapper>
			<IconThumb>
				{' '}
				<BookIcon fill={fill} width={22} height={17} />
			</IconThumb>
			<OverflowText>{title}</OverflowText>
			<Table>
				<tbody>
					<TableRow>
						<TableHeader>Author</TableHeader>
						<TableDetail>{author}</TableDetail>
					</TableRow>
					<TableRow>
						<TableHeader>Year</TableHeader>
						<TableDetail>{publishYear}</TableDetail>
					</TableRow>
					<TableRow>
						<TableHeader>Pages</TableHeader>
						<TableDetail>{pagesTotal}</TableDetail>
					</TableRow>
					{isFinishedReading &&
						<>
						<TableRow>
						<TableHeader>Rating</TableHeader>
						<TableDetail><StarList>{createRatingStars(3)}</StarList></TableDetail>
						</TableRow>
						</>}
				</tbody>
			</Table>
			{isFinishedReading && <Button>Resume</Button>}
		</MobileItemWrapper>
	);
};
export default MobileLibraryItem;
