import styled from '@emotion/styled';

export const Text = styled.p`
	color: ${p => p.theme.colors.textSecondary};
	text-align: center;
`;

export const Span = styled.span`
	color: ${p => p.theme.colors.brand};
	text-decoration: underline;
	cursor: pointer;
`;

export const Container = styled.footer`
	display: flex;
	justify-content: center;
	padding: 10px 0px;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
`;
