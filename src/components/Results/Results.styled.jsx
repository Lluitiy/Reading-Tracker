import styled from '@emotion/styled';

export const ResultsBox = styled.div`
	width: 280px;
	height: 340px;
	padding: 20px;

	background-color: ${p => p.theme.colors.white};
	box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

	@media screen and (min-width: 768px) {
		width: 704px;
		height: 309px;
		padding: 28px 96px;
	}

	@media screen and (min-width: 1280px) {
		width: 280px;
		height: 340px;
		padding: 20px;
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
	gap: 20px;
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
		gap: 20px;
		font-size: 12px;
		color: ${p => p.theme.colors.textMain};
	}
`;

export const FormBox = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 12px;
	/* margin-left: 5px; */
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
	background: ${p => p.theme.colors.body};
	border: 1px solid ${p => p.theme.colors.icons};

	@media screen and (min-width: 768px) {
		width: 110px;
		height: 42px;
		margin-top: 4px;
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
	}
	@media screen and (min-width: 1280px) {
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
	font-weight: 600px;
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
		font-weight: 600px;
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
