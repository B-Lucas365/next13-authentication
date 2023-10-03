'use client'
import styled, {keyframes} from "styled-components"

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

export const SpinnerContainer = styled.div`
    position: fixed ;
    inset: 0px;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SpinnerContent = styled.div`
    height: 50px;
    width: 50px;
    border: 5px solid black;
    border-top: 5px solid #fff;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`