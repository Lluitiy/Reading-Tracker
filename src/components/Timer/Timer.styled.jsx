import styled from '@emotion/styled';

export const TimerContainer = styled.div`
	width: 100%;
	margin: 0px auto;
	padding: 0px 20px;
	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 768px;
		padding: 0px 32px;
	}
	@media screen and (min-width: 1280px) {
		width: 1280px;
		padding: 0px 16px;
	}
`;
