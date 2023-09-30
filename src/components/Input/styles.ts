'use client '
import styled from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`

`

export const InputComponent = styled.input`
    height: 2rem;
    width: 100%;
    border: 1px solid #9ca3af;
    padding: 0 1rem;
    border-radius: 5px;
    
    &:focus {
        outline: none;
        border: 1px solid #374151;
    }
`