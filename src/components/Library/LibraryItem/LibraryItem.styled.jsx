import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
    display: grid;
    padding: 16px 20px;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    box-shadow: ${p => p.theme.shadow.box};
    background-color: ${p => p.theme.colors.white};
    @media screen and (min-width: 768px) {
    grid-template-columns: 35px 300px 200px 100px 80px;
    }
    @media screen and (min-width: 1280px) {
    grid-template-columns: 40px 580px 380px 120px 80px;
    }
` 
export const StarList = styled.ul`
    width: fit-content;
    display: flex;
`


