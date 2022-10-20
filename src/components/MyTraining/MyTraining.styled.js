import styled from '@emotion/styled';

export const Title = styled.h1`
	margin-bottom: 24px;
	display: block;
	padding: 18px;
	background-color: ${p => p.theme.colors.trainingGrey};
	color: ${p => p.theme.colors.white};
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	text-align: center;
`;
export const DataInput = styled.input`
	width: 250px;
	height: 42px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	background-color: ${p => p.theme.colors.transparent};
`;
export const Select = styled.select`
	box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
	padding: 12px;
	width: 715px;
	height: 42px;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	color: ${p => p.theme.colors.icons};
`;

export const DateContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 44px;
	margin-bottom: 24px;
`;
export const SelectContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 32px;
`;
