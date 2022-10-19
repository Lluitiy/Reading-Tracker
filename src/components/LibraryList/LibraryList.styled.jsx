import styled from '@emotion/styled';

export const Header = styled.h2`
margin-bottom: 20px;
@media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
`
export const ItemWrapper = styled.div`
    display: none;
    padding: 16px 20px;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    box-shadow: ${p => p.theme.shadow.box};
    background-color: ${p => p.theme.colors.white};
    @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 35px 300px 200px 100px 80px;
    }
    @media screen and (min-width: 1280px) {
    grid-template-columns: 40px 580px 380px 120px 80px;
    }
 ` 


export const MobileItemWrapper = styled.div`
    position: relative;
    margin-top: 16px;
    padding: 20px 30px 20px 54px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    background-color: ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.shadow.box};

    @media screen and (min-width: 768px) {
        display: none;
    }
`
export const Table = styled.table`
    margin-top: 12px;
`
export const TableHeader = styled.td`
    width: 80px;
    color:  ${p => p.theme.colors.textSecondary};
`
export const TableRow = styled.tr`
    display: block;
    margin-bottom: 14px;
    &:last-of-type{
        margin-bottom: 0;
    }
`

export const ListHeaders = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
    color: ${p => p.theme.colors.textSecondary};
    display: grid;
    grid-template-columns:  357px 195px 100px 78px;
    }
    @media screen and (min-width: 1280px) {
    grid-template-columns:  640px 380px 120px 80px;
    }
`

export const IconThumb = styled.div`
    position: absolute;
    left: 20px;
    width: fit-content;
    height: fit-content;
     @media screen and (min-width: 768px) {
        display: inline;
        position: static;
    }
`