import React, { useState } from 'react';
import RatingStars from './RatingStars';

export const ResumeModal = ({ onClose }) => {
	const [feedback, setFeedback] = useState('');
	const [rating, setRating] = useState(0);

	const changeRating = e => {
		setRating(Math.ceil(e));
	};
	// Неконтрольована форма - запис при сабміті
	const handleSubmit = event => {
		event.preventDefault();
		setFeedback(event.currentTarget.elements.resume.value);

		console.log({rating, feedback});
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
				<h3>Choose book rating</h3>

				<RatingStars value={rating} changeHandler={changeRating} />
				<p>Resume</p>
				<input
					type="text"
					name="resume"
					value={feedback}
					onChange={handleInputChange}
				></input>
				<button type="button" onClick={onClose}>
					Back
				</button>
				<button type="submit">Save</button>
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
