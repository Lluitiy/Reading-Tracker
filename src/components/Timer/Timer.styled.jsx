import styled from '@emotion/styled';

export const TimerContainer = styled.div`
	box-sizing: border-box;
	margin: 0px auto;
	padding: 0px 20px;
	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 800px;
		padding: 0px 20px;
	}
	@media screen and (min-width: 1280px) {
		max-width: 900px;
		padding: 0px 16px;
	}
`;
