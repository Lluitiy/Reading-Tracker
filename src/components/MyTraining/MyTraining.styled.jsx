import styled from '@emotion/styled';
import { ReactComponent as DataIcon } from 'Assets/svg/calendar.svg';
import { ReactComponent as ArrowIcon } from 'Assets/svg/arrowDown.svg';
import { ReactComponent as CalenderIcon } from 'Assets/svg/calendar.svg';

export const Title = styled.h2`
	display: block;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	text-align: center;
	margin-bottom: 20px;
	padding: 18px;
	background-color: ${p => p.theme.colors.trainingGrey};
	color: ${p => p.theme.colors.white};
	@media screen and (min-width: 768px) {
		margin-bottom: 28px;
	}

	@media screen and (min-width: 1280px) {
		margin-bottom: 24px;
	}
`;
export const DateContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		margin-bottom: 24px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 40px;
	}
	@media screen and (min-width: 1280px) {
		gap: 44px;
		justify-content: center;
		padding-right: 40px;
	}
`;
export const DataInput = styled.input`
	border: 1px solid ${p => p.theme.colors.icons};
	/* position: relative; */
	padding: 12px, 45px;
	width: 100%;
	height: 42px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	background-color: ${p => p.theme.colors.transparent};
	color: ${p => p.theme.colors.icons};
	margin-bottom: 20px;
	@media screen and (min-width: 768px) {
		margin-bottom: 0;
		min-width: 250px;
	}
	@media screen and (min-width: 1280px) {
	}
`;
export const SelectContainer = styled.div`
	text-align: center;
<<<<<<< HEAD:src/components/MyTraining/MyTraining.styled.js

=======
	margin-bottom: 16px;
>>>>>>> b87179bcfed76c6739598a14b8c8579e24828e30:src/components/MyTraining/MyTraining.styled.jsx
	@media screen and (min-width: 768px) {
		margin-bottom: 40px;
		display: flex;
		align-items: center;
		gap: 50px;
	}
	@media screen and (min-width: 1280px) {
		margin-bottom: 23px;

		gap: 32px;
	}
`;
export const Select = styled.select`
	margin-bottom: 32px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	min-height: 42px;
	padding: 12px;
	width: 100%;
	color: ${p => p.theme.colors.icons};
	background-color: ${p => p.theme.colors.transparent};
	box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
	@media screen and (min-width: 768px) {
		margin-bottom: 0;
		min-width: 483px;
		padding: 12px;
	}

	@media screen and (min-width: 1280px) {
		min-width: 715px;

		margin-bottom: 0;
	}
`;
export const DataSvg = styled(DataIcon)`
	margin-left: 10px;
	margin-right: 20px;
`;
export const CalenderThumb = styled.div`
	position: relative;
	width: 280px;
	@media screen and (min-width: 768px) {
		width: 250px;
	}
`;
export const Label = styled.label`
	position: relative;
`;
export const BoxForSvg = styled.div`
	/* border: 1px solid ${p => p.theme.colors.icon}; */
	display: flex;
	align-items: center;
	width: 200px;
	height: 40px;
	/* height: 42px; */
	background-color: ${p => p.theme.colors.body};
	position: absolute;
	top: 1px;
	left: 1px;
`;
export const Arrow = styled(ArrowIcon)`
	fill: ${p => p.theme.colors.icons};
`;
export const DateIcon = styled(CalenderIcon)`
	position: absolute;
	top: 0;
	left: 12px;
	transform: translateY(50%);
`;
