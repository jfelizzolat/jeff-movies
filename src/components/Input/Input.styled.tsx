import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const InputStyled = styled.input`
  border: 2px solid white;
  width: 100%;
  height: 44px;
  border-radius: 12px;
  font-size: 18px;
  font-family: ${inter.style.fontFamily};
  padding: 4px 12px;
  box-sizing: border-box;
  font-weight: 300;
  outline: 0;
`;
