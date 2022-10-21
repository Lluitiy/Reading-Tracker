import {
	MobileItemWrapper,
	IconThumb,
	Table,
	TableRow,
	TableHeader,
} from './MobileLibraryItem.styled';
import { ReactComponent as BookIcon } from 'Assets/svg/book.svg';

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
			<span>{title}</span>
			<Table>
				<tbody>
					<TableRow>
						<TableHeader>Author</TableHeader>
						<td>{author}</td>
					</TableRow>
					<TableRow>
						<TableHeader>Year</TableHeader>
						<td>{publishYear}</td>
					</TableRow>
					<TableRow>
						<TableHeader>Pages</TableHeader>
						<td>{pagesTotal}</td>
					</TableRow>

				</tbody>
			</Table>
		</MobileItemWrapper>
	);
};
export default MobileLibraryItem;
