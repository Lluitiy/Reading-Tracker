import styled from '@emotion/styled';

export const UserWrapper = styled.div`
	margin-right: 14px;
`;

export const UserIcon = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	width: 33px;
	height: 33px;
	background-color: ${p => p.theme.colors.googleBtn};
`;
