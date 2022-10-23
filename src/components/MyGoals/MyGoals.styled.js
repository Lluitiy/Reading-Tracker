import styled from '@emotion/styled';

export const MyGoalsContainer = styled.div`
	background-color: ${p => p.theme.colors.white};
	color: ${p => p.theme.colors.textSecondary};
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		display: flex;
		margin-bottom: 40px;

		padding: 23px 52px 8px 28px;

		box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
	}

	@media screen and (min-width: 1280px) {
		display: block;
		padding: 0;
		margin-bottom: 0px;
	}
`;
export const Title = styled.h1`
	display: block;

	padding: 18px 26px;
	background-color: ${p => p.theme.colors.trainingGrey};
	color: ${p => p.theme.colors.white};
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	text-align: center;

	@media screen and (min-width: 768px) {
		display: block;
		min-width: 275px;
		max-height: 60px;
		padding: 18px 28px;
	}
	@media screen and (min-width: 1280px) {
		display: block;
		margin-right: 0;
		max-width: 100%;
		padding: 18px 28px;
	}
`;
export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ startTraining = false }) =>
		startTraining ? '32px 30px' : '44px 30px'};
	gap: ${({ startTraining = false }) => (startTraining ? '12px' : '20px')};

	color: ${p => p.theme.colors.textSecondary};

	@media screen and (min-width: 768px) {
		margin-left: ${({ startTraining = false }) =>
			startTraining ? '20px' : '108px'};
		gap: ${({ startTraining = false }) => (startTraining ? '12px' : '40px')};
		padding: 0;
	}

	@media screen and (min-width: 1280px) {
		margin-left: 0;

		padding: ${({ startTraining = false }) =>
			startTraining ? '80px 25px' : '48px 37px'};
		box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
		gap: 20px;
	}
`;
export const Counter = styled.p`
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 0.85;
	text-align: center;
	box-shadow: ${p => p.theme.shadow.counter};
	color: ${({ theme, active = false }) =>
		active ? theme.colors.brand : theme.colors.counter};
	background-color: ${p => p.theme.colors.googleBtn};
	padding: ${({ startTraining = false }) =>
		startTraining ? '12px 5px' : '31px 20px'};
	gap: ${({ startTraining = false }) => (startTraining ? '12px' : '20px')};

	@media screen and (min-width: 768px) {
		padding: 11px;

		gap: ${({ startTraining = false }) => (startTraining ? '12px' : '40px')};
	}
	@media screen and (min-width: 1280px) {
		padding: ${({ startTraining = false }) =>
			startTraining ? '14px 5px' : '31px 37px'};

		gap: 20px;
	}
`;
export const Text = styled.p`
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	line-height: 1.21;
	text-align: center;
	color: ${p => p.theme.colors.textSecondary};
	font-size: ${({ startTraining = false }) =>
		startTraining ? '14px' : '11px'};
	margin-top: ${({ startTraining = false }) =>
		startTraining ? '8px' : '14px'};

	@media screen and (min-width: 768px) {
		font-size: ${({ startTraining = false }) =>
			startTraining ? '11px' : '11px'};
	}
	@media screen and (min-width: 1280px) {
		margin-top: 14px;
		margin-left: auto;
		margin-right: auto;
		max-width: 66px;
		font-size: ${({ startTraining = false }) =>
			startTraining ? '12px' : '14px'};
	}
`;
export const Item = styled.li`
	min-width: ${({ startTraining = false }) =>
		startTraining ? '63px' : '100px'};
	min-height: ${({ startTraining = false }) =>
		startTraining ? '97px' : '148px'};

	color: ${p => p.theme.colors.textSecondary};

	@media screen and (min-width: 768px) {
		min-width: ${({ startTraining = false }) =>
			startTraining ? '100px' : '100px'};
		min-height: ${({ startTraining = false }) =>
			startTraining ? '77px' : '77px'};
	}

	@media screen and (min-width: 1280px) {
		min-width: ${({ startTraining = false }) =>
			startTraining ? '66px' : '100px'};
		min-height: ${({ startTraining = false }) =>
			startTraining ? '110px' : '148px'};
	}
`;
