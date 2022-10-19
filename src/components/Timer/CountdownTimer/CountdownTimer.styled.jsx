import styled from '@emotion/styled';

export const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 12px 0px;
`;

export const Title = styled.p`
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	margin-bottom: 9px;
	color: ${p => p.theme.colors.textSecondary};
`;

export const Dots = styled.p`
	font-weight: 700;
	font-size: 25px;
	line-height: 38px;
	color: ${p => p.theme.colors.textMain};
`;

export const Counter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	padding: 10px;
	min-width: 280px;
	background-color: ${p => p.theme.colors.white};
	box-shadow: ${p => p.theme.shadow.box};
	@media screen and (min-width: 768px) {
	}

	@media screen and (min-width: 1200px) {
	}
`;

// .expired-notice {
//   text-align: center;
//   padding: 2rem;
//   border: 1px solid #ebebeb;
//   border-radius: 0.25rem;
//   margin: 0.5rem;
// }

// .expired-notice > span {
//   font-size: 2.5rem;
//   font-weight: bold;
//   color: red;
// }

// .expired-notice > p {
//   font-size: 1.5rem;
// }

// .show-counter {
//   padding: 0.5rem;
// }

// .show-counter .countdown-link {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   font-weight: 700;
//   font-size: 1.25rem;
//   line-height: 1.75rem;
//   padding: 0.5rem;
//   border: 1px solid #ebebeb;
//   border-radius: 0.25rem;
//   text-decoration: none;
//   color: #000;
// }

// .show-counter .countdown {
//   line-height: 1.25rem;
//   padding: 0 0.75rem 0 0.75rem;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
// }

// .show-counter .countdown.danger {
//   color: #ff0000;
// }

// .show-counter .countdown > p {
//   margin: 0;
// }

// .show-counter .countdown > span {
//   text-transform: uppercase;
//   font-size: 0.75rem;
//   line-height: 1rem;
// }
