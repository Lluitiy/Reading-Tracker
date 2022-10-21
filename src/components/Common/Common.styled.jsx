import styled from '@emotion/styled';

export const Section = styled.section`
	color: ${p => p.theme.colors.textMain};
	padding: 8px 0px;

	@media screen and (min-width: 768px) {
		padding: 15px 0px;
	}
`;

export const Container = styled.div`
	width: 320px;
	/* width: 100%; */
	margin: 0px auto;
	padding: 0px 20px;
	@media screen and (min-width: 768px) {
		width: 768px;

		padding: 0px 32px;
	}
	@media screen and (min-width: 1280px) {
		width: 1280px;
		padding: 0px 16px;
	}
`;
