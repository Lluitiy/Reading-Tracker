import styled from '@emotion/styled';
import mobile from 'Assets/loginRegister/mobile/mobile.jpg';
import mobile2x from 'Assets/loginRegister/mobile/mobile@2x.jpg';
import tablet from 'Assets/loginRegister/tablet/tablet.jpg';
import tablet2x from 'Assets/loginRegister/tablet/tablet@2x.jpg';
import desktop from 'Assets/loginRegister/desktop/desktop.jpg';
import desktop2x from 'Assets/loginRegister/desktop/desktop@2x.jpg';

import vector from '../../Assets/svg/angleQuote.svg';

export const Wrapper = styled.div`
	@media screen and (min-width: 1280px) {
		display: flex;
		justify-content: center;
		height: 90vh;
	}
`;

export const FormBox = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	padding-top: 32px;
	padding-bottom: 44px;
	height: 100%;
	min-width: 320px;
	background-image: linear-gradient(rgba(9, 30, 63, 0.8), rgba(9, 30, 63, 0.8)),
		url(${mobile});
	@media screen and (min-device-pixel-ratio: 2),
		(min-resolution: 192dpi),
		(min-resolution: 2dppx) {
		background-image: linear-gradient(
				rgba(9, 30, 63, 0.8),
				rgba(9, 30, 63, 0.8)
			),
			url(${mobile2x});
	}
	@media screen and (min-width: 768px) {
		padding-top: 64px;
		padding-bottom: 65px;
		background-image: linear-gradient(
				rgba(9, 30, 63, 0.8),
				rgba(9, 30, 63, 0.8)
			),
			url(${tablet});
		@media screen and (min-device-pixel-ratio: 2),
			(min-resolution: 192dpi),
			(min-resolution: 2dppx) {
			background-image: linear-gradient(
					rgba(9, 30, 63, 0.8),
					rgba(9, 30, 63, 0.8)
				),
				url(${tablet2x});
		}
	}
	@media screen and (min-width: 1280px) {
		padding: 0;
		min-width: 549px;
		height: 100%;
		background-image: linear-gradient(
				rgba(9, 30, 63, 0.8),
				rgba(9, 30, 63, 0.8)
			),
			url(${desktop});
		@media screen and (min-device-pixel-ratio: 2),
			(min-resolution: 192dpi),
			(min-resolution: 2dppx) {
			background-image: linear-gradient(
					rgba(9, 30, 63, 0.8),
					rgba(9, 30, 63, 0.8)
				),
				url(${desktop2x});
		}
	}
	background-repeat: no-repeat;
	background-size: cover;
`;

export const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: 767px) {
		padding-top: 64px;
		padding-bottom: 32px;
	}
	@media screen and (min-width: 1280px) {
		display: flex;
		justify-content: center;
		padding-top: 0;
		padding-right: 0;
		padding-left: 127px;
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

export const Subtitle = styled.h2`
	margin-bottom: 14px;
	font-weight: 500;
	font-size: 20px;
	line-height: 1.9;
	color: ${p => p.theme.colors.textMain};
`;

export const ListItem = styled.li`
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	color: ${p => p.theme.colors.textSecondary};
	::before {
		content: '';
		margin-right: 12px;
		padding-top: 1px;
		padding-left: 2px;
		padding-right: 2px;
		background-image: url(${vector});
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		color: ${p => p.theme.colors.brand};
	}
	:not(:last-of-type) {
		margin-bottom: 12px;
	}
`;
