'use client'

import { InputComponent, InputContainer, Label } from "./styles"

interface InputProps {
    label: string, 
    type: string,
    name: string,
    value:string, 
    onChange(event: React.ChangeEvent<HTMLInputElement>): void, 
    error: string, 
    placeholder: string
}

export const Input = ({label, type, name, value, onChange, error, placeholder}: InputProps) => {
    return (
        <InputContainer>
            <Label htmlFor={name}>{label}</Label>
            <InputComponent 
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}      
            />
            {error && <p>{error}</p>}
        </InputContainer>
    )
}