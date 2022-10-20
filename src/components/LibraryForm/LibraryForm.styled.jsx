import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    @media screen and (min-width: 768px){
        height: auto;
    }
`
export const Form = styled.form`
    width: 100%;
	 @media screen and (min-width: 768px) {
		display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
	}
`
export const Upper = styled.div`
    width: 100%;
    height: fit-content;
    @media screen and (min-width: 1280px) {
		width: 346px;
        margin: 0;
        margin-right: 16px;
	}
`
export const Lower = styled.div`
    @media screen and (min-width: 768px) {
	    display: flex;
        height: fit-content;
        width: 100%;
        gap: 32px;
        align-items: center;
        justify-content: center;
	}
    @media screen and (min-width: 1280px) {
		width: fit-content;
        gap: 16px;
        margin: 0;
	}
`

export const Label = styled.label`
	display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;

    font-size: 14px;
    line-height: 1.2;
    font-weight: 500;
    color: ${p => p.theme.colors.textSecondary};
    @media screen and (min-width: 768px) {
		width: 152px;
	}
    @media screen and (min-width: 1280px) {
		margin: 0;
	}
`;

export const Input = styled.input`
    width:auto;
    height: 42px;
    margin-top: 8px;
    padding: 12px;

    background-color: inherit;
    border: 1px solid #A6ABB9;
    outline: none;
    &:focus,
    &:active{
        border: none;
        background-color: #ffffff;
        box-shadow: 0px 1px 2px 0px #1D1D1B26 inset;
    }  	
`
export const NameLabel = styled.label`
	display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;

    font-size: 14px;
    line-height: 1.2;
    font-weight: 500;
    color: ${p => p.theme.colors.textSecondary};
    @media screen and (min-width: 768px) {
		width: 100%;
            margin-bottom: 24px;
	}
    @media screen and (min-width: 1280px) {
		margin: 0;
	}

`
export const AuthorLabel = styled.label`
	display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;

    font-size: 14px;
    line-height: 1.2;
    font-weight: 500;
    color: ${p => p.theme.colors.textSecondary};
    @media screen and (min-width: 768px) {
		width: 336px;
	}
    @media screen and (min-width: 1280px) {
		width: 250px;
        margin: 0;
	}
`



export const BackBtn = styled.button`
width: 40px;
height: 40px;
padding: 0;
    background-color: transparent;
    border: none;

     @media screen and (min-width: 768px) {
		display: none;
	}

`
export const AddBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 171px;
    height: 42px;
    margin: 40px auto;

    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    background-color: transparent;
    border: 1px solid ${p => p.theme.colors.textMain};
     @media screen and (min-width: 768px) {
		margin: 20px auto;
	}
    @media screen and (min-width: 1280px) {
            margin: 0 auto;
            align-self: flex-end;
	}
    &:hover,&:focus{
        border: none;
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.brand};
    }
`
