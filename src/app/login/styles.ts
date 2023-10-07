"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-size: cover;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
`;

export const Form = styled.div`
  padding: 1rem;
  border-radius: 5px;
  width: 28.1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .group-link {
    display: flex;
    gap: 1rem;
    a {
      color: var(--primary-color);
    }
  }
`;

export const Button = styled.button`
  height: 4rem;
  width: 50%;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  transition: .3s;

  &:hover {
    filter: brightness(.8);
  }
`;

export const P = styled.p`
  font-size: 14px;
  color: var(--text-color);
`;
export const H1 = styled.h1`
  font-size: 16;
  color: var(--title-color);
`;
