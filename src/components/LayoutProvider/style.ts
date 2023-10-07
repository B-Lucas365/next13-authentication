"use client";
import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  padding: 1.75rem;
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  a {
    color: var(--text-color);
    font-weight: 700;
  }
`;

export const DivGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const Logout = styled.div`
  color: var(--title-color);
  font-size: 25px;
  cursor: pointer;
`

export const GroupLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

interface isActiveProps {
  isActive: boolean;
}

export const Ancora = styled(Link)<isActiveProps>`
  position: relative;
  transition: 0.3s;

  &::after {
    content: "";
      transition: .5s;
      position: absolute;
      bottom: -7px;
      left: 0;
      height: 3px;
      width: ${props => props.isActive ? '100%' : '0'};
      background-color: var(--title-color);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  clip-path: circle();
  background-color: var(--primary-color);
`;

export const H1 = styled.h1`
  font-size: 20px;
  color: var(--title-color);
`;
