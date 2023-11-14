import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  align-items: center;
  background: #e7ecef;
  height: 80px;
  width: 100vw;
  padding: 8px 100px;
  box-sizing: border-box;
  box-shadow: 0 4px 24px #d1d1d1;
`;

export const NavBarLogo = styled.h2`
  color: #393939;
  font-weight: 400;
  font-size: 28px;

  & > span {
    color: #0077b6;
    font-weight: 600;
  }
`;

export const NavBarOptions = styled.div``;
