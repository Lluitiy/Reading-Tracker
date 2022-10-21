import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 32px 20px 40px 20px;
	@media screen and (min-width: 768px) {
		padding: 64px 145px 88px 145px;
	}
	@media screen and (min-width: 1280px) {
		padding: 179px 154px 239px 127px;
	}
`;

export const Title = styled.h1`
	margin-bottom: 32px;
	font-family: 'Abril Fatface';
	font-weight: 400;
	font-size: 34px;
	line-height: 1.12;
	color: ${p => p.theme.colors.textMain};
	text-align: center;
	@media screen and (min-width: 768px) {
		margin-bottom: 48px;
	}
`;

export const List = styled.ul`
	list-style: none;
`;

export const Subtitle = styled.h2`
	margin-bottom: 14px;
	font-weight: 500;
	font-size: 20px;
	line-height: 1.9;
	color: ${p => p.theme.colors.textMain};
`;

export const MainListItem = styled.li`
	:first-of-type {
		margin-bottom: 24px;
	}
	@media screen and (min-width: 768px) {
		:first-of-type {
			margin-bottom: 32px;
		}
	}
`;

export const ListItem = styled.li`
	display: flex;
	:not(:last-of-type) {
		margin-bottom: 12px;
	}
`;

export const Text = styled.p`
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	color: ${p => p.theme.colors.textSecondary};
`;

export const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 12px;
	padding-top: 4px;
	width: 4px;
	height: 8px;
`;

export const ButtonList = styled.ul`
	margin-top: 61px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	list-style: none;
	column-gap: 20px;
	@media screen and (min-width: 768px) {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		white-space: nowrap;
		clip-path: inset(100%);
		clip: rect(0 0 0 0);
		overflow: hidden;
	}
`;

export const LoginButton = styled.button`
	text-align: center;
	width: 130px;
	font-weight: 500;
	font-size: 14px;
	line-height: 38px;
	color: ${p => p.theme.colors.textMain};
	border: 1px solid black;
	background: ${p => p.theme.colors.transparent};
	background-position: center;
	transition: background 0.5s ease-in;
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
`;

export const RegisterButton = styled.button`
	text-align: center;
	width: 130px;
	font-weight: 500;
	font-size: 14px;
	line-height: 38px;
	border: none;
	border: 1px solid transparent;
	background-color: ${p => p.theme.colors.brand};
	color: ${p => p.theme.colors.white};
	background-position: center;
	transition: background 0.5s ease-in;
	:hover {
		border: 1px solid black;
		background: transparent radial-gradient(circle, transparent 1%, #ff6b08 1%)
			center/15000%;
		color: ${p => p.theme.colors.textMain};
	}
	:active {
		background-color: transparent;
		background-size: 100%;
	}
`;
