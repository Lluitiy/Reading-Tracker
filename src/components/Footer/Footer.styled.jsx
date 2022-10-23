import styled from '@emotion/styled';

export const Text = styled.p`
	color: ${p => p.theme.colors.textSecondary};
	text-align: center;
	margin-right: 20px;
	margin-top: 20px;
	@media screen and (min-width: 768px) {
		margin: 10px 0;
	}
`;

export const Span = styled.span`
	color: ${p => p.theme.colors.brand};
	text-decoration: underline;
	cursor: pointer;
`;

export const Container = styled.footer`
	/* position: relative; */
	background-color: ${p => p.theme.colors.white};
	display: flex;
	justify-content: center;
	flex-direction: column;

	padding: 10px 0px;
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
	/* @media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: center;
	} */
`;
