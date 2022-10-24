import styled from '@emotion/styled';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${p => p.theme.colors.backdrop};
	z-index: 1200;
`;

export const ModalBox = styled.div`
	width: 100%;
	max-width: 300px;
	text-align: center;

	min-height: 395px;
	padding: 48px;
	margin: 0 auto;

	background-color: ${p => p.theme.colors.white};

	@media screen and (min-width: 768px) {
		min-height: 250px;
		max-width: fit-content;

		min-width: 394px;
	}

	@media screen and (min-width: 1280px) {
		min-width: 608px;
	}
`;
