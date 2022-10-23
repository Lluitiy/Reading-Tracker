import styled from '@emotion/styled';

export const NotFoundWrap = styled.form`
	width: 90%;
	margin: 20px auto;
	padding: 30px 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	background-color: #ffffff;
	@media screen and (min-width: 768px) {
		padding: 30px 0px;
		width: 600px;
	}
	@media screen and (min-width: 1280px) {
		padding: 30px 0px 60px 0px;
		width: 800px;
	}
`;

export const Title = styled.h2`
	color: #242a37;
	margin-bottom: 20px;
	font-weight: 400;
	font-size: 34px;
	line-height: 38px;
`;

export const Text = styled.p`
	color: #242a37;
	margin-bottom: 40px;
`;

export const Img = styled.img`
	margin: 0px auto;
	width: 270px;
	padding: 0;

	@media screen and (min-width: 768px) {
		width: 400px;
	}
	@media screen and (min-width: 1280px) {
		width: 600px;
	}
`;

export const ButtonWrap = styled.div`
	margin: 0px auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	@media screen and (min-width: 768px) {
		justify-content: space-between;
		margin-bottom: 20px;
		flex-direction: row;
	}
	@media screen and (min-width: 1280px) {
		margin: 0px auto;

		justify-content: space-between;
		max-width: 700px;
	}
`;

export const Button = styled.button`
	margin-bottom: 20px;
	text-align: center;
	width: 150px;
	font-weight: 500;
	font-size: 18px;
	line-height: 38px;
	border: none;
	border: 1px solid transparent;
	background-color: #ff6b08;
	color: #ffffff;
	background-position: center;
	transition: background 0.3s ease-in;
	:hover {
		border: 1px solid black;
		background: transparent radial-gradient(circle, transparent 1%, #ff6b08 1%)
			center/15000%;
		color: #242a37;
	}
	:active {
		background-color: transparent;
		background-size: 100%;
	}
	@media screen and (min-width: 768px) {
		margin-right: 10px;
		margin-bottom: 0;
		:hover {
			border: 1px solid black;
			background: transparent;
			color: #242a37;
		}
	}
	@media screen and (min-width: 1280px) {
		margin-right: 20px;
	}
`;
