import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'Redux/Auth/authSelectors';

const AuthLocation = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return isLoggedIn ? 'space-between' : 'center';
};

export const Head = styled.header`
	justify-content: center;
	top: 0;
	left: 0;
	position: sticky;
	z-index: 1100;

	background-color: ${p => p.theme.colors.white};
	box-shadow: ${p => p.theme.shadow.box};
`;
export const NavAlign = styled.div`
	display: flex;
	align-items: center;
`;
export const Logo = styled.p`
	justify-content: center;
	text-transform: uppercase;
	color: ${p => p.theme.colors.textMain};
	padding: 16px 0px;
	font-weight: 400;
	font-style: 20px;

	font-family: 'Abril Fatface';
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${AuthLocation};
`;

export const LogoutBtn = styled.button`
	background-color: ${p => p.theme.colors.transparent};
	border: none;
	padding: 0px;
	font-weight: 300;
	font-size: 14px;
	text-decoration: underline;
	color: ${p => p.theme.colors.textMain};
`;
