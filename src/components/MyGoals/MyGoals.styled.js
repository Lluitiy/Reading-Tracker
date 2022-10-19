import styled from '@emotion/styled';

export const MyGoalsContainer = styled.div`
	color: ${p => p.theme.colors.textSecondary};
	@media screen and (min-width: 320px) and (max-width: 767px) {
		/* max-width: 280px; */
		/* max-height: 296px; */

		/* padding: 30px 44px; */
	}

	@media screen and (min-width: 768px) and (max-width: 1199px) {
		/* max-width: 704px; */
		/* max-height: 105px; */
		/* padding-left: 28px;
		padding-right: 52px;
		padding-top: 20px;
		padding-bottom: 8px; */
	}

	@media screen and (min-width: 1200px) {
		/* max-width: 288px; */
		/* max-height: 304px; */

		/* padding: 48px 34px; */
	}
`;
export const Title = styled.h1`
	display: block;
	padding: 18px 28px;
	background-color: ${p => p.theme.colors.trainingGrey};
	color: ${p => p.theme.colors.white};
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	text-align: center;
`;
export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 48px 34px;
	gap: 20px;
	background-color: ${p => p.theme.colors.white};
	color: ${p => p.theme.colors.textSecondary};
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	text-align: center;
`;
export const Counter = styled.p`
	padding: 31px 37px;
	gap: 20px;
	background-color: ${p => p.theme.colors.googleBtn};
	color: ${p => p.theme.colors.counter};
	box-shadow: ${p => p.theme.shadow.counter};
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 45px;
	line-height: 0.85;
	text-align: center;
`;
export const Text = styled.p`
	margin-top: 14px;
	margin-left: auto;
	margin-right: auto;
	color: ${p => p.theme.colors.textSecondary};
	max-width: 66px;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;
	text-align: center;
`;
