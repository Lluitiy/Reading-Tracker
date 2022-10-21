import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 280px;
    height: 425px;
    padding: 45px 20px;
    margin: 80px auto;
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.textMain};
    font-size: 14px;
    line-height: 1.2;
        @media screen and (min-width: 768px) {
		width: 608px;
        height: 272px;
        padding: 40px;
        margin: 40px auto;
	}
`
export const Title = styled.p`
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
    @media screen and (min-width: 768px) {
		margin-bottom: 16px;
        font-size: 19px;
	}
`
export const SubTitle = styled.p`
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
`
export const Guide = styled.p`
    margin: 8px 20px 20px 25px;
    color: ${p => p.theme.colors.textSecondary};
    @media screen and (min-width: 768px) {
		margin-bottom: 24px;
	}
`
export const OkBtn = styled.button`
    display: block;
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    background-color: ${p => p.theme.colors.brand};
    color: ${p => p.theme.colors.white};
    border: none;
    @media screen and (min-width: 768px) {
		display: none;
	}
`