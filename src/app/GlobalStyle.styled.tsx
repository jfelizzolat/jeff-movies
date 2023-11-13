import { createGlobalStyle, styled } from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    &::after, &::before {
    box-sizing: inherit;
    }
  }

  html{
    box-sizing: border-box;
  }
  
  body {
    font-family: ${inter.style.fontFamily};
  }
`;

export default GlobalStyle;
