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



const ModalFaster = ({onClose}) => {
	const navigate = useNavigate();

	return (
		<ModalBox>
			<Okey />
			<ModalText>
				Well done! but you need to be a little bit faster. You can do it
			</ModalText>

			<BtnBox>
				<ResultsBtn type="button" onClick={() => navigate('/library')}>
					New training
				</ResultsBtn>
				<ResultsBackBtn type="button" onClick={onClose}>
					Back
				</ResultsBackBtn>
			</BtnBox>
		</ModalBox>
	);
};

ModalFaster.propTypes = {
	onClose: PropTypes.func.isRequired
};

export default ModalFaster;
