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
import { useState } from 'react';
import Modal from 'components/Modal';
import { ResumeModal } from 'components/ResumeModal/ResumeModal';

const MobileLibraryItem = ({
	title,
	author,
	publishYear,
	fill,
	pagesTotal,
	isFinishedReading
}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => {
		setModalOpen(true);
	};
	
	const closeModal = () => {
		setModalOpen(false);
	};


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
			{isFinishedReading && <Button onClick={openModal}>Resume</Button>}
			{modalOpen && (
			<Modal onClose={closeModal}>
 					<ResumeModal onClose={closeModal} />
			</Modal>
			)}
		</MobileItemWrapper>
	);
};
export default MobileLibraryItem;
