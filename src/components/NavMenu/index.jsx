import React from 'react'

import logo from '../../img/logo.svg';

import { MenuTitle, NavItem, NavList, NavContainer } from './styles'

const NavMenu = () => {
  return (
    <NavContainer>
      <img className="home-logo" src={logo} alt="logo"/>
      <MenuTitle>Easy Launcher</MenuTitle>
      <NavList>
        <NavItem to="/onglet/azeaze">azeaze</NavItem>
        <NavItem to="/onglet/azeazeaze">azeazeaze</NavItem>
        <NavItem to="/onglet/test">test</NavItem>
        <NavItem to="/onglet/test 2">test 2</NavItem>
      </NavList>
    </NavContainer>  
  )   
}

export default NavMenu
