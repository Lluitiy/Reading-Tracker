import styled from '@emotion/styled';

export const MobileItemWrapper = styled.div`
	position: relative;
	margin-top: 16px;
	padding: 20px 30px 20px 54px;
	font-size: 12px;
	font-weight: 500;
	line-height: 1.2;
	background-color: ${p => p.theme.colors.white};
	box-shadow: ${p => p.theme.shadow.box};
`;

export const Table = styled.table`
	table-layout: fixed;
	width: 100%;
	max-width: 280px;
	margin-top: 12px;
`;
export const TableHeader = styled.td`
	width: 80px;
	color: ${p => p.theme.colors.textSecondary};
`;
export const TableDetail = styled.td`
	width: 80px;
`;
export const TableRow = styled.tr`
	width: 200px;
	display: block;
	margin-bottom: 14px;
	&:last-of-type {
		margin-bottom: 0;
	}
`;
export const IconThumb = styled.div`
	position: absolute;
	left: 20px;
	width: fit-content;
	height: fit-content;
`;
