import React, { useCallback, useEffect, useState } from 'react'

import AddTab from '../AddTab'
import logo from '../../img/ico.png';

import { MenuTitle, NavItem, NavList, NavContainer } from './styles'

const utils = require('../../utils')

const NavMenu = () => {
  //TODO : gérer les tabs dans un context
  const [tabs, setTabs] = useState([])
  const userData = JSON.parse(utils.getCookie('userData'))

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

  const handleClickEdit = () => {
    document.querySelectorAll('.tab-remove-btn').forEach((sc) => {
      sc.classList.toggle('active');
    })
  }

  const removeTab = (e) => {
    const id = e.target.closest('[data-id]').dataset.id;
    console.log(id)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        uid: userData.uid,
        tid: id})
    };
    fetch(`${process.env.REACT_APP_API_URL}/removeTab`, requestOptions);
    window.location.reload() 
  }

  return (
    <NavContainer>
      <a href="/">
        <img className="home-logo" src={logo} alt="logo"/>
        <MenuTitle>Easy Launcher</MenuTitle>
      </a>
      <button class="edit-tabs" onClick={handleClickEdit}>Edit</button>
      <NavList>
        {tabs.map(tab => (
          <NavItem data-id={tab.key} to={`/onglet/${tab.name}`}>{tab.name}
            <button class="tab-remove-btn" onClick={removeTab}>x</button>
          </NavItem>
        ))}
        <AddTab />
      </NavList>
    </NavContainer>  
  )   
}

export default NavMenu
