import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Backdrop, ModalBox } from './Modal.styled';

function Modal({ onClose, children, offBackdrop=false }) {
	useEffect(() => {
		const handeleClickDown = e => {
			if (e.code === 'Escape') {
				onClose();
			}
		};
		document.body.style.overflow = 'hidden';

		window.addEventListener('keydown', handeleClickDown);
		return () => {
			document.body.style.overflow = 'auto';
			window.removeEventListener('keydown', handeleClickDown);
		};
		// eslint-disable-next-line
	}, []);


	const handleBackdropClick = e => {
		if (offBackdrop) return;

		if (e.currentTarget === e.target) {
			onClose();
		}
	};

	return (
		<Backdrop onClick={handleBackdropClick}>
			<ModalBox>{children}</ModalBox>
		</Backdrop>
	);
}

export default Modal;

Modal.propTypes = {
	props: PropTypes.objectOf(
		PropTypes.shape({
			onClose: PropTypes.func.isRequired,
			children: PropTypes.node.isRequired,
			offBackdrop: PropTypes.bool,
		})
	),
};

// !=====================

// ? Імпорти
// import Modal from '../Modal';
// import { useState } from 'react';

// ? Локальний стейт
// const [modalOpen, setModalOpen] = useState(false);

// ? Функції відкриття і закриття
// const openModal = () => {
//   setModalOpen(true);
// };

// const closeModal = () => {
//   setModalOpen(false);
// };

// ? Повісити на кнопку
// onClick = { openModal };

// ? Вставити модалку у розмітку
// {
//   modalOpen && (
//     <Modal onClose={closeModal}>
//       <p>YEY!</p>
//     </Modal>
//   );
// }
