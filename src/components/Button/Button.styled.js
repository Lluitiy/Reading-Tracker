import styled from '@emotion/styled';

export const Mybutton = styled.button`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 1.25px;
	text-align: center;
	min-width: 170px;
	height: 42px;

	padding: 10px 47px;

	color: ${p => p.theme.colors.textMain};
	border: 1px solid ${p => p.theme.colors.textMain};
	background-color: ${p => p.theme.colors.transparent};

	transition: ${p => p.theme.transition};

	:hover {
		border: 1px solid ${p => p.theme.colors.transparent};
		background: ${p => p.theme.colors.brand};
		color: ${p => p.theme.colors.white};
	}

	@media screen and (min-width: 768px) {
	}

	@media screen and (min-width: 1280px) {
		min-width: 180px;
	}
`;
