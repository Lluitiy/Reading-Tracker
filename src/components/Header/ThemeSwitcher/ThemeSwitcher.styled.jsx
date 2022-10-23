import styled from '@emotion/styled';
import { ReactComponent as LightThemeIcon } from 'Assets/svg/sun.svg';
import { ReactComponent as DarkThemeIcon } from 'Assets/svg/cloud.svg';

export const ThemeButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: transparent;
	width: 33px;
	height: 33px;
	border: none;
	color: #932bbf;
`;

export const LightIcon = styled(LightThemeIcon)`
	fill: ${p => p.theme.colors.icon};
`;
export const DarktIcon = styled(DarkThemeIcon)`
	fill: ${p => p.theme.colors.icon};
`;
