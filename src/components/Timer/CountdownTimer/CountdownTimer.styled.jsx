import styled from '@emotion/styled';

export const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 12px 0px;
`;

export const Title = styled.p`
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	margin-bottom: 9px;
	color: ${p => p.theme.colors.textSecondary};
`;

export const Dots = styled.p`
	font-weight: 700;
	font-size: 25px;
	line-height: 38px;
	color: ${p => p.theme.colors.textMain};
`;

export const Counter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	padding: 8px 33px;
	min-width: 280px;
	background-color: ${p => p.theme.colors.white};
	box-shadow: ${p => p.theme.shadow.box};
	@media screen and (min-width: 768px) {
		padding: 8px 30px;
	}

	@media screen and (min-width: 1280px) {
		padding: 8px 45px;
	}
`;
