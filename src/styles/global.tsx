"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #252525;
        color: #fff;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    .header{
        display: flex;
        border-bottom: 1px solid #ccc;
        justify-content: space-between;
    }
    
    .header-content {
        display: flex;
        gap: 1rem;
        align-items: center;
    }


`;

export const GlobalStyles = () => {
  return <Globals />;
};
