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
	color: ${p => p.theme.colors.textMain};
	background-color: ${p => p.theme.colors.googleBtn};
`;

export const UserName = styled.p`
	font-weight: 300;
	font-size: 14px;
	text-transform: capitalize;
	color: ${p => p.theme.colors.textMain};
`;

export const UserMeta = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 12px;
`;
