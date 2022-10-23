import styled from '@emotion/styled';

export const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;

	text-align: center;
	@media screen and (min-width: 768px) {
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: row;
	}
	@media screen and (min-width: 1280px) {
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const ItemCard = styled.li`
	background-color: ${p => p.theme.colors.white};
	box-shadow: ${p => p.theme.shadow.box};
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		width: 290px;
	}
	@media screen and (min-width: 1280px) {
		margin: 10px;
	}
`;

export const Thumb = styled.div`
	margin: 0 auto;
	width: 285px;
	height: 285px;
	overflow: hidden;
`;

export const Photo = styled.img`
	width: 285px;
`;

export const Wrap = styled.div`
	padding: 10px;
`;

export const Text = styled.p`
	margin-bottom: 5px;
`;

export const GitLink = styled.a`
	text-decoration: underline;
	color: ${p => p.theme.colors.textSecondary};
`;

export const Button = styled.button`
	margin: 20px auto;
	text-align: center;
	width: 150px;
	font-weight: 500;
	font-size: 18px;
	line-height: 38px;
	color: ${p => p.theme.colors.textMain};
	border: 1px solid ${p => p.theme.colors.textMain};
	background: ${p => p.theme.colors.transparent};
	background-position: center;
	transition: background 0.3s ease-in;
	:hover {
		border: 1px solid transparent;
		background: #ff6b08 radial-gradient(circle, #ff6b08 1%, transparent 1%)
			center/15000%;
		color: ${p => p.theme.colors.white};
	}
	:active {
		background-color: #ff6b08;
		background-size: 100%;
	}
	@media screen and (min-width: 768px) {
		margin-left: 44%;
		:hover {
			border: 1px solid transparent;
			background: #ff6b08;
			color: ${p => p.theme.colors.white};
		}
	}
	@media screen and (min-width: 1280px) {
	}
`;
