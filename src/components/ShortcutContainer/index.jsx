import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AddShortcut from '../AddShortcut'

import { ShortcutItem, ShortcutList } from './styles'

const utils = require('../../utils')

const ShortcutContainer = () => {
  //TODO : gérer les tabs dans un context
  const tab = useParams()
  const [shortcuts, setShortcuts] = useState({})
  const userData = JSON.parse(utils.getCookie('userData'))

  const fetchShortcuts = useCallback(async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    const response = await fetch(`${process.env.REACT_APP_API_URL}/getShortcuts/${userData.uid}/${tab.id}`, requestOptions);
    return response.json()    
  });

  useEffect(() => {
    fetchShortcuts().then(data => {
      setShortcuts(data);
    })
  }, [tab])

  const handleClickEdit = () => {
    document.querySelectorAll('.shortcut-remove-btn').forEach((sc) => {
      sc.classList.toggle('active');
    })
  }

  const removeShortcut = async (e) => {
    const id = e.target.closest('[data-id]').dataset.id;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        uid: userData.uid,
        sid: id})
    };
    const remove = await fetch(`${process.env.REACT_APP_API_URL}/removeShortcut`, requestOptions);
    window.location.reload();
  }

  const openLink = (e) => {
    const url = e.target.dataset.url;
    window.open(url,'_blank');
  }

  return (
    <ShortcutList>
      <button class="edit-shortcuts" onClick={handleClickEdit}>Edit</button>
      {Object.entries(shortcuts).map((sc) => (
        <ShortcutItem data-id={sc[0]}>
          <div data-url={sc[1].link} onClick={openLink}>
            <img src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${sc[1].link}`}/>
            {sc[1].desc}
          </div>
          <button class="shortcut-remove-btn" onClick={removeShortcut}>x</button>
          </ShortcutItem>
      ))}
      <AddShortcut tab={tab} />
    </ShortcutList>
  )   
}

export default ShortcutContainer
