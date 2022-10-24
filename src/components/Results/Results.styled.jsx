import styled from '@emotion/styled';

export const ResultsBox = styled.div`
	width: 280px;
	height: 340px;
	padding: 20px;
	
	background-color: ${p => p.theme.colors.white};
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

	overflow-y: scroll;

	@media screen and (min-width: 768px) {
		width: 704px;
		height: 309px;
		padding: 28px 96px;
	}

	@media screen and (min-width: 1280px) {
		width: 288px;
		height: 340px;
		padding: 20px;
		
	}
	

	::-webkit-scrollbar {
    width: 2px; /* ширина для вертикального скролла */
   
    background-color: ${p => p.theme.colors.brand};
}

/* ползунок скроллбара */
::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.brand};
    border-radius: 9em;
    box-shadow: inset 1px 1px 10px #f3faf7;
}

::-webkit-scrollbar-thumb:hover {
    background-color: ${p => p.theme.colors.brand};
}
`;

export const ResultsTitle = styled.h2`
	display: flex;
	justify-content: center;

	font-size: 12px;
	color: ${p => p.theme.colors.textMain};
	text-transform: uppercase;
`;

export const ResultsForm = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-top: 12px;
	gap: 28px;

	font-size: 12px;
	color: ${p => p.theme.colors.textMain};

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		flex-direction: row;
		margin-bottom: 20px;
		/* gap: 32px; */
	}
	@media screen and (min-width: 1280px) {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-top: 12px;

		font-size: 12px;
		color: ${p => p.theme.colors.textMain};
	}
`;

export const FormBox = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 12px;
	gap: 20px;
	font-size: 12px;

	color: ${p => p.theme.colors.textMain};
`;

export const ResultsLabel = styled.label`
	font-size: 11px;
	color: ${p => p.theme.colors.textSecondary};

	@media screen and (min-width: 768px) {
		gap: 20px;
	}
`;
export const ResultsInput = styled.input`
	width: 100%;
	margin-top: 4px;
	height: 42px;

	background: ${p => p.theme.colors.body};
	border: 1px solid ${p => p.theme.colors.icons};
	

	@media screen and (min-width: 768px) {
		width: 110px;
	}
`;

export const ResultsBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 240px;
	height: 40px;
	margin-bottom: 24px;

	font-size: 16px;
	line-height: 1.21;
	font-weight: 600px;

	border: none;
	color: ${p => p.theme.colors.white};
	background-color: ${p => p.theme.colors.brand};

	@media screen and (min-width: 768px) {
		margin-bottom: 0px;
		height: 42px;
	}
	@media screen and (min-width: 1280px) {
		height: 40px;
	}
	&:hover,
	&:focus {
	}
`;

export const ResultsBackBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 240px;
	height: 40px;
	margin-bottom: 24px;

	font-size: 16px;
	line-height: 1.21;
	font-weight: 600px;

	border: 1px soild ${p => p.theme.colors.black};
	color: ${p => p.theme.colors.black};
	background-color: ${p => p.theme.colors.white};

	@media screen and (min-width: 768px) {
		margin-bottom: 0px;
		height: 42px;
	}
	@media screen and (min-width: 1280px) {
		height: 40px;
	}
	&:hover,
	&:focus {
	}
`;
export const StatisticsPageBox = styled.div`
	position: relative;

	@media screen and (min-width: 768px) {
		text-align: left;
	}
`;
export const StatisticsPageTitle = styled.h2`
	display: flex;
	justify-content: center;

	font-weight: 700;
	font-size: 12px;
	line-height: 1.21;
	color: ${p => p.theme.colors.textMain};
	text-transform: uppercase;

	@media screen and (min-width: 768px) {
		justify-content: left;
	}

	::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 74px;
		height: 1px;
		background-color: ${p => p.theme.colors.borderNav};
	}
	::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 0;
		width: 74px;
		height: 1px;
		background-color: ${p => p.theme.colors.borderNav};
	}

	@media screen and (min-width: 768px) {
		::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			width: 1px;
			height: 1px;
			background-color: transparent;
		}

		::before {
			content: '';
			position: absolute;
			top: 50%;
			right: 53%;
			width: 159px;
			height: 1px;
			background-color: ${p => p.theme.colors.borderNav};
		}
	}

	@media screen and (min-width: 1280px) {
		display: flex;
		justify-content: center;

		font-weight: 700px;
		font-size: 12px;
		line-height: 1.21;
		color: ${p => p.theme.colors.textMain};
		text-transform: uppercase;

		::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			width: 74px;
			height: 1px;
			background-color: ${p => p.theme.colors.borderNav};
		}
		::before {
			content: '';
			position: absolute;
			top: 50%;
			right: 0;
			width: 74px;
			height: 1px;
			background-color: ${p => p.theme.colors.borderNav};
		}
	}
`;

export const ResultsPageList = styled.ul`
	margin-top: 4px;
`;

export const BtnBox = styled.div`
	margin-top: 24px;

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: center;
		gap: 32px;
	}

	@media screen and (min-width: 1280px) {
		display: flex;
		justify-content: center;
		gap: 32px;
	}
`;

export const ModalBox = styled.div`
	/* margin-left: auto;
margin-right: auto; */
`;

export const ModalText = styled.p`
	margin-left: auto;
	margin-right: auto;
	margin-top: 14px;
`;
export const ResultsCalenderThumb = styled.div`
	width: 150px;
	border-radius: 1px !important;
`;
