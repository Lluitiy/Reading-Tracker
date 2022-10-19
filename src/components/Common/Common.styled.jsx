import styled from '@emotion/styled';

export const Section = styled.section`
	color: ${p => p.theme.colors.textMain};
	padding: 8px 0px;
	background-color: ${p => p.theme.colors.body};
	@media screen and (min-width: 768px) {
		padding: 15px 0px;
	}
`;

export const Container = styled.div`
	max-width: 320px;
	width: 100%;
	margin: 0px auto;
	padding: 0px 20px;
	@media screen and (min-width: 768px) {
		max-width: 768px;

		padding: 0px 32px;
	}
	@media screen and (min-width: 1280px) {
		max-width: 1280px;
		padding: 0px 16px;
	}
`;
