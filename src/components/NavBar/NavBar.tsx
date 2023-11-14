'use client';
import { NavBarWrapper, NavBarLogo, NavBarOptions } from './NavBar.styled';
import Input from '../Input';
import Dropdown from '../Dropdown';

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarLogo>
        JEFF<span>MOVIES</span>
      </NavBarLogo>
      <Input />
      <NavBarOptions>
        <Dropdown />
      </NavBarOptions>
    </NavBarWrapper>
  );
};

export default NavBar;
