import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookReview } from 'Redux/Books/booksOperations';
import RatingStars from './RatingStars';
import useTranslation from 'Hooks/useTranslations';
import {
	ButtonBackS,
	ButtonContainerS,
	ButtonSaveS,
	Form,
	RatingTextS,
	ResumeTextS,
	TextAreaS,
	Wrapper,
} from './ResumeModal.styled';

export const ResumeModal = ({ onClose, initRating = 0, id, }) => {
	const [feedback, setFeedback] = useState(' ');
	const [rating, setRating] = useState(initRating);
	const dispatch = useDispatch()
		const translation = useTranslation();


	const changeRating = e => {
		setRating(Math.ceil(e));
	};

	const handleSubmit = event => {
		event.preventDefault();
		const review = { id, rating, feedback }
		dispatch(addBookReview(review))

	
		event.currentTarget.reset();
		onClose();
	};

	const handleInputChange = event => {
		setFeedback(event.target.value);
	};

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit} autoComplete="off">
				<label>

					<RatingTextS>{translation.resumeModal.title}</RatingTextS>
					<RatingStars value={rating} changeHandler={changeRating} />
					<ResumeTextS>{translation.resumeModal.resume}</ResumeTextS>

					<TextAreaS
						type="text"
						name="resume"
						value={feedback}
						onChange={handleInputChange}
					/>
					<ButtonContainerS>
						<ButtonBackS type="button" onClick={onClose}>
							{translation.resumeModal.btnBack}
						</ButtonBackS>
						<ButtonSaveS type="submit">{translation.resumeModal.btnSave}</ButtonSaveS>
					</ButtonContainerS>
				</label>
			</Form>
		</Wrapper>
	);
};

// disabled Save button?
// Save input for reload page & close Modal...

// Для підключення:
// import { useState } from 'react';
// import Modal from '../components/Modal/Modal';
// import { ResumeModal } from '../components/ResumeModal/ResumeModal';

// const HomePage = () => {
// 	const [modalOpen, setModalOpen] = useState(false);

// 	const openModal = () => {
// 		setModalOpen(true);
// 	};

// 	const closeModal = () => {
// 		setModalOpen(false);
// 	};

// 	return (
// 		<>
// 			<div>qwe</div>
// 			<button type="button" onClick={openModal}>
// 				RESUME
// 			</button>
// 			{modalOpen && (
// 				<Modal onClose={closeModal}>
// 					<ResumeModal onClose={closeModal} />
// 				</Modal>
// 			)}
// 		</>
// 	);
// };

// export default HomePage;
