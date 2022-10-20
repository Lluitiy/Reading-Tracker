import styled from '@emotion/styled';

export const StatisticsBox = styled.div`
	/* margin-left: auto;
margin-right: auto; */

	text-align: end;
	background-color: #ffffff;

	/* от 768 до 1199 только планшет */
	@media screen and (min-width: 768px) and (max-width: 1199px) {
		width: 704px;
		padding-left: 46px;
		padding-right: 51px;
	}

	/* от 1200 только пк */
	@media screen and (min-width: 1200px) {
		padding-left: 40px;
		padding-right: 77px;
		width: 928px;
	}
`;

export const StatisticsTitle = styled.h2`
	display: flex;
	margin-left: 5px;
	font-size: 12px;
	color: #242a37;
	text-transform: uppercase;
`;

export const StatisticsText = styled.p`
	/* margin-left: 782px; */
	margin-top: 5px;
	margin-right: 50px;
	font-size: 12px;
	font-weight: 600;
	color: #091e3f;
	text-transform: uppercase;
`;
