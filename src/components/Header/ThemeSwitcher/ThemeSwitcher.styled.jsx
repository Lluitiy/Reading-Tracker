// import styled from '@emotion/styled';

// label,
// main {
// 	background: var(--bg, white);
// 	color: var(--text, black);
// }

// main {
// 	--gradDark: hsl(144, 100%, 89%);
// 	--gradLight: hsl(42, 94%, 76%);
// 	background: linear-gradient(to bottom, var(--gradDark), var(--gradLight));
// 	padding: 120px 40px 40px 40px;
// 	min-height: 100vh;
// 	text-align: center;
// }

// .wrapper {
// 	max-width: 700px;
// 	margin: 0 auto;
// }

// .theme-switch__input:checked ~ main,
// .theme-switch__input:checked ~ label {
// 	--text: white;
// }

// .theme-switch__input:checked ~ main {
// 	--gradDark: hsl(198, 44%, 11%);
// 	--gradLight: hsl(198, 39%, 29%);
// }

// // Toggle switch
// .theme-switch__input,
// .theme-switch__label {
// 	position: absolute;
// 	z-index: 1;
// }

// .theme-switch__input {
// 	opacity: 0;

// 	&:hover,
// 	&:focus {
// 		+ .theme-switch__label {
// 			background-color: lightSlateGray;
// 		}

// 		+ .theme-switch__label span::after {
// 			background-color: lighten(lightBlue, 10%);
// 		}
// 	}
// }

// .theme-switch__label {
// 	padding: 20px;
// 	margin: 60px;
// 	transition: background-color 200ms ease-in-out;
// 	width: 120px;
// 	height: 50px;
// 	border-radius: 50px;
// 	text-align: center;
// 	background-color: slateGray;
// 	box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);

// 	&::before,
// 	&::after {
// 		font-size: 2rem;
// 		position: absolute;
// 		transform: translate3d(0, -50%, 0);
// 		top: 50%;
// 	}

// 	&::before {
// 		content: '\263C';
// 		right: 100%;
// 		margin-right: 10px;
// 		color: orange;
// 	}

// 	&::after {
// 		content: '\263E';
// 		left: 100%;
// 		margin-left: 10px;
// 		color: lightSlateGray;
// 	}

// 	span {
// 		position: absolute;
// 		bottom: calc(100% + 10px);
// 		left: 0;
// 		width: 100%;
// 	}

// 	span::after {
// 		position: absolute;
// 		top: calc(100% + 15px);
// 		left: 5px;
// 		width: 40px;
// 		height: 40px;
// 		content: '';
// 		border-radius: 50%;
// 		background-color: lightBlue;
// 		transition: transform 200ms, background-color 200ms;
// 		box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
// 	}
// }

// // Checked label styles
// .theme-switch__input:checked ~ .theme-switch__label {
// 		background-color: lightSlateGray;

// 	&::before {
// 		color: lightSlateGray;
// 	}

// 	&::after {
// 		color: turquoise;
// 	}

// 	span::after {
// 		transform: translate3d(70px, 0, 0);
// 	}
// }
