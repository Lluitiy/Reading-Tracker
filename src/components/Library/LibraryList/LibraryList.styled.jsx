import styled from '@emotion/styled';

export const Header = styled.h2`
	margin-bottom: 20px;
	@media screen and (min-width: 768px) {
		margin-bottom: 24px;
	}
`;
// export const ListHeaders = styled.div`
//     display: none;
//     @media screen and (min-width: 768px) {
//     color: ${p => p.theme.colors.textSecondary};
//     display: grid;
//     grid-template-columns:  357px 195px 100px 78px;
//     }
//     @media screen and (min-width: 1280px) {
//     grid-template-columns:  640px 380px 120px 80px;
//     }
// `

export const IconThumb = styled.div`
	display: inline;
	width: fit-content;
	height: fit-content;
`;
