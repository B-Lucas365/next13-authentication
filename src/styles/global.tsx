"use client";
import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    :root {
        --text-color:#9C9DA2;
        --primary-color: #0449E9;
        --title-color: #EDEDEE;
        --input-color: #595B63 ;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(
      to right,
      rgba(39, 42, 55, 0.99),
      rgba(255, 255, 255, 0.1)
    ),
        url("/background.jpg");
        background-size: cover;
    }

    a {
        text-decoration: none;
    }

`;

export const GlobalStyles = () => {
  return <Globals />;
};
