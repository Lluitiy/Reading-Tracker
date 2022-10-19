import styled from '@emotion/styled';

export const Numbers = styled.p`
	font-weight: 700;
	font-size: 25px;
	line-height: 38px;
	color: ${p => p.theme.colors.textMain};
`;

export const Date = styled.span`
	font-weight: 500;
	font-size: 10px;
	line-height: 12px;
	text-align: center;
	color: ${p => p.theme.colors.textSecondary};
`;
