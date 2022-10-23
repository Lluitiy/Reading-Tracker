import styled from '@emotion/styled';

export const Wrap = styled.div`
	margin: 10px auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80px;
	@media screen and (min-width: 768px) {
		position: fixed;
		right: 90px;
	}
`;
