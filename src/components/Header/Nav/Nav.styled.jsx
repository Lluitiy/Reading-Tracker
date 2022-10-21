import styled from '@emotion/styled';
import { ReactComponent as HomeIcon } from 'Assets/svg/HomeIcon.svg';
import { ReactComponent as LibIcon } from 'Assets/svg/book.svg';
import { NavLink } from 'react-router-dom';

export const IconLink = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 33px;
	height: 33px;
	transition: ${p => p.theme.transition};
	&.active {
		background-color: ${p => p.theme.colors.googleBtn};
	}
	:hover:not(.active),
	:focus:not(.active) {
		background-color: ${p => p.theme.colors.googleBtn};
	}
`;

export const Navi = styled.div`
	display: flex;
	align-items: center;
	padding: 0px 8px;
	gap: 20px;
	border-right: 1px solid ${p => p.theme.colors.borderNav};
	margin-right: 14px;
`;
export const IconHome = styled(HomeIcon)`
	fill: ${p => p.theme.colors.icons};
	width: 20px;
	height: 17px;
`;
export const IconLib = styled(LibIcon)`
	fill: ${p => p.theme.colors.icons};
	width: 22px;
	height: 17px;
`;
