'use client'
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    height: 100vh; 
    background-color: #6b7280;
    justify-content: center;
    align-items: center;
    color: #111827;
`

export const Form = styled.div`
    background-color: #d1d5db;
    padding: 1rem;
    border-radius: 5px;
    width: 28.1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Button = styled.button`
    height: 2.5rem;
    width: 100%;
    background-color: #111827;
    color: #fff;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`