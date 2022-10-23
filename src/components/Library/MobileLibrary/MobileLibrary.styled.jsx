import styled from '@emotion/styled';

export const PlusBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 52px;
    height: 52px;

    background-color: ${p => p.theme.colors.brand};
    color: ${p => p.theme.colors.white};

    font-size: 25px;
    border: none;
    border-radius: 50%;
`