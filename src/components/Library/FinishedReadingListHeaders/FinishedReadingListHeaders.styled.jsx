import styled from '@emotion/styled';

export const Headers = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
    color: ${p => p.theme.colors.textSecondary};
    display: grid;
    grid-template-columns:  215px 120px 60px 68px 200px;
    }
    @media screen and (min-width: 1280px) {
    grid-template-columns:  640px 380px 120px 80px;
    }
`