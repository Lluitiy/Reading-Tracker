import styled from '@emotion/styled';


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`
export const Form = styled.form`
    width: 100%;
	 @media screen and (min-width: 768px) {
		display: flex;
        flex-wrap: wrap;
	}

`
export const Upper = styled.div`
    width: 100%;
    height: 70px;

`
export const Lower = styled.div`
   
@media screen and (min-width: 768px) {
		 display: flex;
    height: 70px;
    width: 100%;
    gap: 32px;

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
`;

export const Input = styled.input`
/* box-sizing: border-box; */
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

`
