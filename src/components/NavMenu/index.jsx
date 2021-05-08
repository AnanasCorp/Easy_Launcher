import React, { useCallback, useEffect, useState } from 'react'

import AddTab from '../AddTab'
import logo from '../../img/ico.png';

import { MenuTitle, NavItem, NavList, NavContainer } from './styles'

const NavMenu = () => {
  //TODO : gérer les tabs dans un context
  const [tabs, setTabs] = useState([])
  const userData = JSON.parse(sessionStorage.getItem('userData'))

  const fetchTabs = useCallback(async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/getTabs/${userData.uid}`, requestOptions);
    const data = await response.json()

    setTabs(data)
  }, [])

  useEffect(() => {
    fetchTabs()
  }, [])

  return (
    <NavContainer>
      <a href="/">
        <img className="home-logo" src={logo} alt="logo"/>
        <MenuTitle>Easy Launcher</MenuTitle>
      </a>
      <NavList>
        {tabs.map(tab => (
          <NavItem to={`/onglet/${tab.name}`}>{tab.name}</NavItem>
        ))}
        <AddTab />
      </NavList>
    </NavContainer>  
  )   
}

export default NavMenu
