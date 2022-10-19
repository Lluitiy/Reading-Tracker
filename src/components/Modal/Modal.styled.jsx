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
	display: flax;
	flex-direction: column;
	align-items: center;

	padding: 40px 48px;
	max-width: 280px;
	text-align: center;

	background-color: #fff;

	@media screen and (min-width: 768px) {
		.modal {
			padding: 20px 48px;
			max-width: 394px;
		}
	}

	@media screen and (min-width: 1200px) {
		.modal {
			padding: 30px 60px;
			max-width: 608px;
		}
	}
`;
