import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Page = styled.div`
	width: 280px;
	@media screen and (min-width: 768px) {
		width: 400px;
		margin: auto;
	}
`;

export const FormBox = styled.div`
	padding: 32px 20px;

	@media screen and (min-width: 768px) {
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
		background: #ffffff;
		padding: 40px;
	}
`;

export const Button = styled.button`
	text-align: center;
	width: 100%;
	height: 60px;
	padding: 0;
	margin-bottom: 20px;
	background: #ff6b08;

	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;

	color: #ffffff;
	border: none;

	:hover {
		background-color: #fd781f;
	}

	@media screen and (min-width: 768px) {
		width: 320px;
	}
`;

export const NavBox = styled.div`
	display: flex;
	justify-content: center;
`;

export const NavText = styled.p`
	margin-right: 4px;

	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 16px;
	color: #898f9f;
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
