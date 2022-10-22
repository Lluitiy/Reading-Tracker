import styled from '@emotion/styled';
import { Field } from 'formik';

export const Input = styled.div`
	margin-bottom: 20px;
`;

export const InputField = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	margin-bottom: 8px;

	color: #ffffff;

	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;

	@media screen and (min-width: 768px) {
		font-weight: 500;
		color: #898f9f;
	}
`;

export const FieldInput = styled(Field)`
	height: 42px;
	padding-left: 8px;
	background: #f5f7fa;
	color: black;
	box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
	border: none;

	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
`;

export const Error = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 1.12;
	color: red;
	text-align: center;
`;
