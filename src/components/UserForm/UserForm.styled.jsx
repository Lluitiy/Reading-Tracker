import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoginPage = styled.div`
	width: 360px;
	padding: 8% 0 0;
	margin: auto;
`;

export const FormBox = styled.div`
	position: relative;
	background: #ffffff;
	max-width: 360px;
	margin: 0 auto 100px;
	padding: 45px;
	text-align: center;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const Button = styled.button`
	width: 280px;
	height: 60px;
	left: 20px;
	top: 334px;
	margin-bottom: 20px;
	background: #ff6b08;
	:hover {
		background-color: #fd781f;
	}
	border: none;
`;

export const NavBox = styled.div`
	margin-left: auto;
	margin-right: auto;
	display: flex;
`;

export const NavText = styled.p`
	padding-right: 5px;
`;

export const NavLogin = styled(NavLink)`
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 16px;
	text-decoration-line: underline;
	text-align: center;
	color: #ff6b08;
`;
