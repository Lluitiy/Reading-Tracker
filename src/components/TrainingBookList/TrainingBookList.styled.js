import styled from '@emotion/styled';
export const ListHeaders = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		padding: 12px 0px;
		border-top: 1px solid #e0e5eb;
		border-bottom: 1px solid #e0e5eb;
		color: ${p => p.theme.colors.textSecondary};
		display: grid;
		grid-template-columns: 285px 205px 110px 1rem;
	}
	@media screen and (min-width: 1280px) {
		grid-template-columns: 405px 220px 120px 1rem;
	}
`;
export const ItemWrapper = styled.div`
	display: none;
	padding: 10px 0px;
	/* margin-top: 16px; */
	font-size: 14px;
	font-weight: 500;
	line-height: 1.2;
	box-shadow: ${p => p.theme.shadow.box};

	background-color: ${p => p.theme.colors.transparent};
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 40px 245px 205px 110px 60px 1rem;
	}
	@media screen and (min-width: 1280px) {
		grid-template-columns: 35px 370px 220px 120px 140px 1rem;
	}
`;

export const IconThumb = styled.div`
	position: absolute;
	left: 20px;
	width: fit-content;
	height: fit-content;
	@media screen and (min-width: 768px) {
		display: inline;
		position: static;
	}
`;

export const CheckBox = styled.div`
	input {
		opacity: 0;
		position: absolute;
		width: 15px;
		height: 15px;
		& + label {
			position: relative;
			width: 15px;
			height: 15px;
			border: 1px solid #a6abb9;
			display: flex;
			justify-content: center;
			align-items: center;
			& > svg {
				display: none;
			}
		}
		&:checked + label {
			border: 1px solid #ff6b08;
			background-image: url('Assets/svg/CheckBox.svg');
			background-size: contain;
			fill: green;

			& > svg {
				display: block;
			}
		}
	}
`;
export const List = styled.ul`
	/* background-color: red; */
	@media screen and (min-width: 768px) {
		width: 704px;
		height: 235px;

		overflow-y: scroll;
	}
	@media screen and (min-width: 1280px) {
		width: 928px;
		height: 150px;

		overflow-y: scroll;
	}

	::-webkit-scrollbar {
		width: 5px; /* ширина для вертикального скролла */
		background-color: ${p => p.theme.colors.backdrop};
	}

	/* ползунок скроллбара */
	::-webkit-scrollbar-thumb {
		background-color: ${p => p.theme.colors.trainingGrey};
		border-radius: 9em;
		box-shadow: inset 1px 1px 10px #f3faf7;
	}
`;
