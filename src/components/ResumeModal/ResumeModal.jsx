import React, { useState } from 'react';
import RatingStars from './RatingStars';
import useTranslation from 'Hooks/useTranslations';

export const ResumeModal = ({ onClose }) => {
	const [feedback, setFeedback] = useState('');
	const [rating, setRating] = useState(0);
	const translation = useTranslation();

	const changeRating = e => {
		setRating(Math.ceil(e));
	};
	// Неконтрольована форма - запис при сабміті
	const handleSubmit = event => {
		event.preventDefault();
		setFeedback(event.currentTarget.elements.resume.value);

		console.log({ rating, feedback });
		event.currentTarget.reset();
		onClose();
	};

	// контрольована форма - для відслідковування введенного
	const handleInputChange = event => {
		setFeedback(event.target.value);
		// console.log('Input', resume);
	};

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<label>
				<h3>{translation.resumeModal.title}</h3>

				<RatingStars value={rating} changeHandler={changeRating} />
				<p>{translation.resumeModal.resume}</p>
				<input
					type="text"
					name="resume"
					value={feedback}
					onChange={handleInputChange}
				></input>
				<button type="button" onClick={onClose}>
					{translation.resumeModal.btnBack}
				</button>
				<button type="submit">{translation.resumeModal.btnSave}</button>
			</label>
		</form>
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
