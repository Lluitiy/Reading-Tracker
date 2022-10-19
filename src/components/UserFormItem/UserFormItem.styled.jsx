import styled from '@emotion/styled';
import { Field } from 'formik';

export const Input = styled.div`
	margin-bottom: 20px;
	margin-left: auto;
	margin-right: auto;
	@media screen and (min-width: 768px) {
		margin-bottom: 32px;
	}

	display: flex;
	flex-direction: column;
`;

export const InputField = styled.div`
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	width: 156px;
	left: 20px;
	top: 160px;
	margin-bottom: 8px;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	color: #ffffff;
	@media screen and (min-width: 768px) {
		width: 154px;
		height: 17px;
		left: 115px;
		top: 353px;
		font-weight: 500;
		color: #898f9f;
	}
`;

export const FieldInput = styled(Field)`
	height: 42px;
	left: 20px;
	top: 185px;
	padding-left: 8px;
	background: #f5f7fa;
	box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
	border: none;
`;

export const Error = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 1.12;
	color: red;
	text-align: center;
`;

export const Button = styled.button`
	/* width: 280px; */
	height: 60px;
	left: 20px;
	top: 334px;
	margin-bottom: 20px;
	:hover {
		background-color: #fd781f;
	}
	@media screen and (min-width: 768px) {
		width: 320px;
		left: 115px;
		top: 539px;
	}
	background: #ff6b08;
	margin-left: auto;
	margin-right: auto;
	border: none;
`;

export const TextButton = styled.p`
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	color: #ffffff;
`;
