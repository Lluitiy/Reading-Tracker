import {
	MobileItemWrapper,
	IconThumb,
	Table,
	TableRow,
	TableHeader,
	TableDetail,
} from './MobileLibraryItem.styled';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';
import {
	Button,
	OverflowText,
	StarList,
} from '../LibraryItem/LibraryItem.styled';
import createRatingStars from 'Utils/RatingStars';
import useTranslation from 'Hooks/useTranslations';

const MobileLibraryItem = ({
	title,
	author,
	publishYear,
	fill,
	pagesTotal,
	isFinishedReading,
}) => {
	const translation = useTranslation();

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
						<TableHeader>{translation.mobileLibraryItem.author}</TableHeader>
						<TableDetail>{author}</TableDetail>
					</TableRow>
					<TableRow>
						<TableHeader>{translation.mobileLibraryItem.year}</TableHeader>
						<TableDetail>{publishYear}</TableDetail>
					</TableRow>
					<TableRow>
						<TableHeader>{translation.mobileLibraryItem.pages}</TableHeader>
						<TableDetail>{pagesTotal}</TableDetail>
					</TableRow>
					{isFinishedReading && (
						<>
							<TableRow>
								<TableHeader>
									{translation.mobileLibraryItem.rating}
								</TableHeader>
								<TableDetail>
									<StarList>{createRatingStars(3)}</StarList>
								</TableDetail>
							</TableRow>
						</>
					)}
				</tbody>
			</Table>
			{isFinishedReading && (
				<Button>{translation.mobileLibraryItem.btn}</Button>
			)}
		</MobileItemWrapper>
	);
};
export default MobileLibraryItem;
