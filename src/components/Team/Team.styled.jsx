import styled from '@emotion/styled';

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;

	text-align: center;
`;

export const ItemCard = styled.li`
	background-color: ${p => p.theme.colors.white};
	box-shadow: ${p => p.theme.shadow.box};
	padding: 5px;
	margin-bottom: 20px;
`;

export const Thumb = styled.div`
	width: 285px;
	height: 285px;
	overflow: hidden;
`;

export const Photo = styled.img`
	width: 285px;
`;

export const Wrap = styled.div`
	padding: 10px;
`;

export const Text = styled.p`
	margin-bottom: 5px;
`;

export const Link = styled.a`
	text-decoration: underline;
`;
