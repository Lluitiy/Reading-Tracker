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
	padding: 8px 0px;
	background-color: ${p => p.theme.colors.white};
	box-shadow: ${p => p.theme.shadow.box};
`;
export const NavAlign = styled.div`
	display: flex;
	align-items: center;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${AuthLocation};
`;
