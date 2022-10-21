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
	max-width: 280px;
	max-height: 395px;
	padding: 20px 20px 40px;
	margin: 0 auto;
	// display: flex;
	// flex-direction: column;
	// align-items: center;

	text-align: center;
	background-color: ${p => p.theme.colors.white};

	@media screen and (min-width: 768px) {
		max-width: 608px;
		max-height: 399px;
	}

	@media screen and (min-width: 1200px) {
	}
`;
