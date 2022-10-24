import styled from '@emotion/styled';

export const Container = styled.div`
	margin-top: 20px;
	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
		margin-top: 32px;
	}

	@media screen and (min-width: 1280px) {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 32px;
	}
`;
