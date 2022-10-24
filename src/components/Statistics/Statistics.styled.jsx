import styled from '@emotion/styled';

export const StartTraningBox = styled.div`
   display: flex;
   justify-content: center;
   max-width: 958px;
   
`

export const StartTraningBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 240px;
	height: 40px;

	font-size: 16px;
	line-height: 1.21;
	font-weight: 600px;

	border: none;
	color: ${p => p.theme.colors.white};
	background-color: ${p => p.theme.colors.brand};

	@media screen and (min-width: 768px) {
		margin-bottom: 0px;
		height: 42px;
	}
	@media screen and (min-width: 1280px) {
		height: 40px;
	}
	&:hover,
	&:focus {
	}
`;
export const StatisticsSection = styled.section`
	display: block;
   margin-top: 32px;

	@media screen and (min-width: 768px) {
		display: block;
      margin-top: 40px;
	}

	@media screen and (min-width: 1280px) {
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		margin-bottom: 40px;
	}
`;

export const StatisticsBox = styled.div`
	width: 280px;
	padding: 22px;
	margin-bottom: 32px;

	text-align: end;
	background-color: ${p => p.theme.colors.white};
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);

	@media screen and (min-width: 768px) {
		width: 704px;
		padding-left: 49px;
		padding-right: 30px;
		padding-top: 35px;
		margin-bottom: 40px;
	}

	@media screen and (min-width: 1280px) {
		width: 928px;
		height: 340px;

		padding-top: 37px;
		padding-right: 40px;
		padding-bottom: 32px;
		padding-left: 40px;
		margin-bottom: 0;
	}
`;

export const StatisticsTitle = styled.h2`
	display: flex;
	margin-left: 5px;

	font-size: 12px;
	color: ${p => p.theme.colors.textMain};
	text-transform: uppercase;

	@media screen and (min-width: 1280px) {
		margin-bottom: 8px;
	}
`;

export const StatisticDaysSpan = styled.span`
margin-left: 5px;
`;

export const StatisticsText = styled.p`
	margin-top: 5px;
	margin-right: 50px;

	font-size: 12px;
	font-weight: 600;
	
	color: ${p => p.theme.colors.counter};
	text-transform: uppercase;

	@media screen and (min-width: 768px) {
		margin-right: 57px;
	}
`;
