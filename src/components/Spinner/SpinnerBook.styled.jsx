import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const pageTurn = keyframes`
        0% {
			transform: rotateY(0deg);
		}
		20% {
			background: #4b1e77;
		}
		40% {
			background: rebeccapurple;
			transform: rotateY(-180deg);
		}
		100% {
			background: rebeccapurple;
			transform: rotateY(-180deg);
		}`;

export const Book = styled.div`
	margin: 5% auto 30px;

	border: 4px solid orange;
	width: 60px;
	height: 45px;
	position: relative;
	perspective: 150px;
	& figure:nth-of-type(1) {
		-webkit-animation: ${pageTurn} 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.6s
			infinite;
		animation: ${pageTurn} 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.6s infinite;
	}
	& figure:nth-of-type(2) {
		-webkit-animation: ${pageTurn} 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.45s
			infinite;
		animation: ${pageTurn} 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.45s infinite;
	}
	& figure:nth-of-type(3) {
		-webkit-animation: ${pageTurn} 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.2s
			infinite;
		animation: ${pageTurn} 1.2s cubic-bezier(0, 0.39, 1, 0.68) 1.2s infinite;
	}

	@-webkit-keyframes pageTurn {
		0% {
			-webkit-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}
		20% {
			background: #4b1e77;
		}
		40% {
			background: rebeccapurple;
			-webkit-transform: rotateY(-180deg);
			transform: rotateY(-180deg);
		}
		100% {
			background: rebeccapurple;
			-webkit-transform: rotateY(-180deg);
			transform: rotateY(-180deg);
		}
	}
`;

export const Page = styled.figure`
	display: block;
	width: 30px;
	height: 45px;
	border: 4px solid orange;
	border-left: 1px solid #8455b2;
	margin: 0;
	position: absolute;
	right: -4px;
	top: -4px;
	overflow: hidden;
	background: #8455b2;
	transform-style: preserve-3d;
	-webkit-transform-origin: left center;
	transform-origin: left center;
`;
const dots = keyframes`
        0% {
		content: '';
		}
		33% {
			content: '.';
		}
		66% {
			content: '..';
		}
		100% {
			content: '...';
		}
`;
export const LoaderH2 = styled.h2`
	color: orange;
	text-align: center;
	font-family: sans-serif;
	text-transform: uppercase;
	font-size: 20px;
	position: relative;
	:after {
		position: absolute;
		content: '';
		-webkit-animation: Dots 2s cubic-bezier(0, 0.39, 1, 0.68) infinite;
		animation: ${dots} 2s cubic-bezier(0, 0.39, 1, 0.68) infinite;
	}
	@-webkit-keyframes Dots {
		0% {
			content: '';
		}
		33% {
			content: '.';
		}
		66% {
			content: '..';
		}
		100% {
			content: '...';
		}
	}
`;
