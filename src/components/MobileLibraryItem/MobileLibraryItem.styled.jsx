import styled from '@emotion/styled';

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
export const IconThumb = styled.div`
    position: absolute;
    left: 20px;
    width: fit-content;
    height: fit-content;
     /* @media screen and (min-width: 768px) {
        display: inline;
        position: static;
    } */
`