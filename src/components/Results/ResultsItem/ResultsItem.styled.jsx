import styled from '@emotion/styled';

export const ResultsPageItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	@media screen and (min-width: 768px) {
		width: 240px;
	}

	@media screen and (min-width: 1280px) {
	}
`;

export const DateText = styled.p`
	font-size: 14px;
	line-height: 1.21;
	color: ${p => p.theme.colors.textMain};
`;
export const TimeUpdateText = styled.p`
	font-size: 14px;
	line-height: 1.21;
	color: ${p => p.theme.colors.textSecondary};
`;

export const PagesCountText = styled.p`
	font-size: 14px;
	line-height: 1.21;
	color: ${p => p.theme.colors.textMain};
`;

export const PagesCountSpan = styled.span`
	font-size: 14px;
	line-height: 1.21px;
	margin-left: 3px;
	color: ${p => p.theme.colors.textSecondary};
`;
