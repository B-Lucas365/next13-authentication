"use client ";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: .5rem; 
  left: 1rem;
  pointer-events: none;
  color: var(--text-color);
  font-size: 12px;
`;
export const InputComponent = styled.input`
  height: 4rem;
  width: 100%;
  border: none;
  padding-left: 1rem;
  border-radius: 15px;
  font-size: 14px;
  background-color: var( --input-color);
  color: var(--title-color);

  &:focus {
    outline: none;
    border: 1px solid var(--primary-color);
  }
`;
