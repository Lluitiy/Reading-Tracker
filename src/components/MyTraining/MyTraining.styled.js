import styled from '@emotion/styled';
import { ReactComponent as DataIcon } from '../../Assets/svg/calendar.svg';
import { ReactComponent as ArrowIcon } from '../../Assets/svg/arrowDown.svg';

export const Title = styled.h1`
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
	display: block;
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		margin-bottom: 24px;
		display: flex;
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
	border: 1px solid #a6abb9;
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
export const Label = styled.label`
	position: relative;
`;
export const BoxForSvg = styled.div`
	/* border: 1px solid #a6abb9; */
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
	position: absolute;
	/* top: -50%;
	left: -50%;
	transform: translateX(); */
	left: 234px;
	top: 45%;
`;
