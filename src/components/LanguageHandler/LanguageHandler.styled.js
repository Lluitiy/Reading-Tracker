import styled from '@emotion/styled';

export const Select = styled.select`
	-webkit-appearance: none;
	height: 33px;
	width: 33px;
	padding: 0px 5px;
	text-align: center;
	font-size: 16px;
	border: none;
	border-radius: 50%;

	color: ${p => p.theme.colors.textSecondary};
	font-weight: bold;
	background-color: ${p => p.theme.colors.googleBtn};
	transition: ${p => p.theme.transition};
	&:hover,
	&:focus {
		color: ${p => p.theme.colors.white};
		background-color: ${p => p.theme.colors.brand};
		border: none;
		outline-color: ${p => p.theme.colors.borderNav};
	}
`;

export const Option = styled.option`
	color: ${p => p.theme.colors.textMain};
	background-color: ${p => p.theme.colors.white};
`;
