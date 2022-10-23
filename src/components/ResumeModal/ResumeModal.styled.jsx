import styled from '@emotion/styled';


export const Form = styled.form`
	color: ${p => p.theme.colors.textMain};
	text-align: left;
`;

export const Wrapper = styled.div`
    height: 395px;

	@media screen and (min-width: 768px) {
        width:560px;
        height: 399px;
	}
`

export const RatingTextS = styled.p`
	line-height: 1.22;
	margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;

	@media screen and (min-width: 768px) {
		margin-bottom: 12px;
	}
`;


export const ResumeTextS = styled.h3`
	margin: 20px 0 8px 0;
    font-weight: 500;
    font-size: 16px;

	@media screen and (min-width: 768px) {
		margin: 12px 0 20px 0;
	}

`;

export const TextAreaS = styled.textarea`
	width: 100%;
	height: 170px;
    overflow: scroll;
	margin-bottom: 20px;
	padding: 12px;
	resize: none;
    border-color: ${p => p.theme.colors.textSecondary};

	@media screen and (min-width: 768px) {
		margin-bottom: 28px;
        height: 170px;
	}

`;

export const ButtonContainerS = styled.div`
	display: flex;
	gap: 28px;
	justify-content: center;
`;

export const ButtonBackS = styled.button`
	height: 40px;
	width: 97px;

	font-size: 14px;
	font-weight: 500;
	line-height: 1.2;
	color: ${p => p.theme.colors.textMain};

	background-color: ${p => p.theme.colors.white};
	border: 1px solid ${p => p.theme.colors.textMain};

	@media screen and (min-width: 768px) {
		width: 130px;
	}
`;

export const ButtonSaveS = styled.button`
	height: 40px;
	width: 97px;

	font-size: 14px;
	font-weight: 500;
	line-height: 1.2;
	color: ${p => p.theme.colors.white};

	background-color: ${p => p.theme.colors.brand};
	border: 1px solid ${p => p.theme.colors.brand};

	@media screen and (min-width: 768px) {
		width: 130px;
	}
`;