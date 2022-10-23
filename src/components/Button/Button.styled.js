import styled from '@emotion/styled';

export const Mybutton = styled.button`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 1.25px;
	text-align: center;
	min-width: 170px;
	height: 40px;
	border: ${({ primary = false }) => {
		return primary ? 'none' : '1px solid #242A37';
	}};
	padding: 10px 47px;

	color: ${({ primary = false, theme }) => {
		return primary ? theme.colors.white : theme.colors.black;
	}};

	background-color: ${({ primary = false, theme }) => {
		return primary ? theme.colors.brand : theme.colors.transparent;
	}};

	transition: ${({ theme }) => theme.transition};
	&:hover,
	:focus {
		transform: scale(1.01);
	}
	@media screen and (min-width: 768px) {
	}

	@media screen and (min-width: 1280px) {
		min-width: 180px;
	}
`;
