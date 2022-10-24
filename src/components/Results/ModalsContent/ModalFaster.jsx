import React from 'react';
import PropTypes from 'prop-types';
import {
	BtnBox,
	ModalBox,
	ModalText,
	ResultsBackBtn,
	ResultsBtn,
} from '../Results.styled';
import { ReactComponent as Okey } from 'Assets/svg/okey.svg';
import { useNavigate } from 'react-router-dom';
import useTranslation from 'Hooks/useTranslations';

const ModalFaster = ({ onClose }) => {
	const translation = useTranslation();
	const navigate = useNavigate();

	return (
		<ModalBox>
			<Okey />
			<ModalText>{translation.modalFaster.text}</ModalText>

			<BtnBox>
				<ResultsBtn type="button" onClick={() => navigate('/library')}>
					{translation.modalFaster.btnNew}
				</ResultsBtn>
				<ResultsBackBtn type="button" onClick={onClose}>
					{translation.modalFaster.btnBack}
				</ResultsBackBtn>
			</BtnBox>
		</ModalBox>
	);
};

ModalFaster.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default ModalFaster;
