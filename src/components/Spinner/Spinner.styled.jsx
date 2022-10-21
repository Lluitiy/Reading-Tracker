import styled from '@emotion/styled';

export const Wrap = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Text = styled.div`
	color: ${p => p.theme.colors.brand};
	display: inline-block;
	margin-left: 5px;
`;
export const BounceBall = styled.div`
	position: relative;
	display: inline-block;
	height: 37px;
	width: 15px;
	&:before {
		position: absolute;
		content: '';
		display: block;
		top: 0;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: ${p => p.theme.colors.brand};
		transform-origin: 50%;
		animation: bounce 500ms alternate infinite ease;

		@keyframes bounce {
			0% {
				top: 30px;
				height: 5px;
				border-radius: 60px 60px 20px 20px;
				transform: scaleX(2);
			}
			35% {
				height: 15px;
				border-radius: 50%;
				transform: scaleX(1);
			}
			100% {
				top: 0;
			}
		}
	}
`;
