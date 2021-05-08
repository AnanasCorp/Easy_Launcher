import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import AddShortcut from '../AddShortcut'

import { ShortcutItem, ShortcutList } from './styles'

const ShortcutContainer = () => {
  //TODO : gérer les tabs dans un context
  const tab = useParams()
  const [shortcuts, setShortcuts] = useState([])
  const userData = JSON.parse(sessionStorage.getItem('userData'))

  const fetchShortcuts = useCallback(async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/getShortcuts/${userData.uid}/${tab}`, requestOptions);
    const data = await response.json()

    setShortcuts(data)
  }, [])

  useEffect(() => {
    fetchShortcuts()
  }, [])

  return (
    <ShortcutList>
      {shortcuts.map(sc => (
        <ShortcutItem>{sc.name}</ShortcutItem>
      ))}
      <AddShortcut tab={tab} />
    </ShortcutList>
  )   
}

export default ShortcutContainer
