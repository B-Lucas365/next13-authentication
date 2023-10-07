'use client'
import styled, {keyframes} from "styled-components"

const loader = keyframes`
    0%   { transform: scale(0.0); }
	40%  { transform: scale(1.0); }
	80%  { transform: scale(1.0); }
	100% { transform: scale(0.0); }
`

export const SpinnerContainer = styled.div`
	z-index: 99;
    position: fixed ;
    inset: 0px;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SpinnerContent = styled.div`
    position: relative;
	display: grid;
	grid-template-columns: 33% 33% 33%;
	grid-gap: 2px;
	width: 100px;
	height: 100px;

    > div {
		position: relative;
		width: 100%;
		height: 100%;
		background: var(--primary-color);
		transform: scale(0.0);
		transform-origin: center center;
		animation: ${loader} 2s infinite linear;
		
		&:nth-of-type(7) {}
		
		&:nth-of-type(1),
		&:nth-of-type(5), 
		&:nth-of-type(9) {
			animation-delay: 0.4s;
		}
		
		&:nth-of-type(4),
		&:nth-of-type(8) {
			animation-delay: 0.2s;
		}
		
		&:nth-of-type(2),
		&:nth-of-type(6) {
			animation-delay: 0.6s;
		}
		
		&:nth-of-type(3) {
			animation-delay: 0.8s;
		}
	}
`