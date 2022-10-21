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
export const FinishedReadingItemWrapper = styled.div`  
    display: grid;
    gap: 5px;
    align-items: center;
    padding: 16px 20px;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    box-shadow: ${p => p.theme.shadow.box};
    background-color: ${p => p.theme.colors.white};
    @media screen and (min-width: 768px) {
        grid-template-columns: 35px 150px 110px 75px 45px 120px 75px;
    }
    @media screen and (min-width: 1280px) {
        grid-template-columns: 35px 300px 260px 115px 130px 155px 210px;
    }
    `

export const OverflowText = styled.p`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

export const StarList = styled.ul`
    width: fit-content;
    display: flex;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 127px;
    height: 40px;
    margin: 10px auto;

    background-color: ${p => p.theme.colors.bookIcons};
    border: none;
    color: ${p => p.theme.colors.white};
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    @media screen and (min-width: 768px) {
        margin: 0;
        width: 80px;
    }
    @media screen and (min-width: 1280px) {
        width: 130px;
    }
`
