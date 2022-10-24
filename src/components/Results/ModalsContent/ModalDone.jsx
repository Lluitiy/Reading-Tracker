import React from 'react';
import PropTypes from 'prop-types';
import { BtnBox, ModalBox, ModalText, ResultsBtn } from '../Results.styled';
import { ReactComponent as OkeyDone } from 'Assets/svg/okeyDone.svg';
import useTranslation from 'Hooks/useTranslations';

const ModalDone = ({ onClose }) => {
	const translation = useTranslation();
	return (
		<ModalBox>
			<OkeyDone />

			<ModalText>{translation.modalDone.text}</ModalText>

			<BtnBox>
				<ResultsBtn type="button" onClick={onClose}>
					{translation.modalDone.btnDone}
				</ResultsBtn>
			</BtnBox>
		</ModalBox>
	);
};

ModalDone.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default ModalDone;
