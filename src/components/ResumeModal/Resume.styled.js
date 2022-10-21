import styled from '@emotion/styled';

export const Form = styled.form`
	color: ${p => p.theme.colors.textMain};
	text-align: left;

	@media screen and (min-width: 768px) {
	}

	@media screen and (min-width: 1200px) {
	}
`;

export const RatingTextS = styled.p`
	line-height: 1.22;
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		margin-bottom: 12px;
	}

	@media screen and (min-width: 1200px) {
	}
`;

export const ResumeTextS = styled.h3`
	margin: 20px 0 8px;

	font-weight: 500;

	@media screen and (min-width: 768px) {
		margin: 12px 0 20px;
	}

	@media screen and (min-width: 1200px) {
	}
`;

export const TextAreaS = styled.textarea`
	width: 100%;
	margin-bottom: 20px;
	padding: 12px;
	resize: none;

	@media screen and (min-width: 768px) {
		margin-bottom: 28px;
	}

	@media screen and (min-width: 1200px) {
	}
`;

export const ButtonContainerS = styled.div`
	display: flex;
	gap: 28px;
	// align-items: center;
	justify-content: center;
`;

export const ButtonBackS = styled.button`
	height: 40px;
	min-width: 97px;

	font-size: 14px;
	font-weight: 500;
	line-height: 1.2;
	color: ${p => p.theme.colors.textMain};

	background-color: ${p => p.theme.colors.white};
	border: 1px solid ${p => p.theme.colors.textMain};
	box-shadow: ${p => p.theme.shadow.modal};

	@media screen and (min-width: 768px) {
		min-width: 130px;
	}

	@media screen and (min-width: 1200px) {
	}
`;

export const ButtonSaveS = styled.button`
	height: 40px;
	min-width: 97px;

	font-size: 14px;
	font-weight: 500;
	line-height: 1.2;
	color: ${p => p.theme.colors.white};

	background-color: ${p => p.theme.colors.brand};
	border: 1px solid ${p => p.theme.colors.brand};
	box-shadow: ${p => p.theme.shadow.modal};
	@media screen and (min-width: 768px) {
		min-width: 130px;
	}

	@media screen and (min-width: 1200px) {
	}
`;
