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
import { useState } from 'react';
import Modal from 'components/Modal';
import { ResumeModal } from 'components/ResumeModal/ResumeModal';
import useTranslation from 'Hooks/useTranslations';


const MobileLibraryItem = ({
	title,
	author,
	publishYear,
	fill,
	pagesTotal,
	isFinishedReading,
	rating,
	id

}) => {
		const translation = useTranslation();
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
						<TableHeader>{translation.mobileLibraryItem.rating}</TableHeader>
						<TableDetail><StarList>{createRatingStars(rating)}</StarList></TableDetail>
						</TableRow>
						</>)
						}
				</tbody>
			</Table>
			{isFinishedReading && <Button onClick={openModal}>{translation.mobileLibraryItem.btn}</Button>}
			{modalOpen && (
			<Modal onClose={closeModal}>
 					<ResumeModal initRating={rating} id={id} onClose={closeModal} />
			</Modal>

			)}
		</MobileItemWrapper>
	);
};
export default MobileLibraryItem;
