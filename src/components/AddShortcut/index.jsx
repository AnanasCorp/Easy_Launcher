import React, { useCallback, useRef, useState } from 'react'
import { useParams } from 'react-router'

import { AddShortcutContainer } from './styles'

const AddShortcut = () => {
  const inputName = useRef()
  const inputLink = useRef()
  const tab = useParams()
  const [isFormVisible, setFormVisible] = useState(false)

  const handleSubmit = useCallback(async e => {
    e.preventDefault()
    
    if (!inputName.current.value) return 

    const userData = JSON.parse(sessionStorage.getItem('userData'))
    console.log(userData)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        desc: inputName.current.value,
        link: inputLink.current.value,
        tab: tab.id,
        uid: userData.uid })
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/addShortcut`, requestOptions);
    const data = await response.json()

    if (data.success) {
      // dégueu, c'est pour que les nouvelles tabs soit affichées.
      // plus tard ce sera gérer par un context / un truc qui va rerender la list automatiquement
      window.location.reload()
    } else {
      console.error('error when adding shortcut')
    }

    handleHideForm()
  }, [inputName])

  const handleDisplayForm = useCallback(() => setFormVisible(true), [setFormVisible])
  const handleHideForm = useCallback(() => setFormVisible(false), [setFormVisible])

  return (
    <AddShortcutContainer>
      {isFormVisible ? (
        <form onSubmit={handleSubmit} method="POST">
          <button className="cancel-tab-btn" onClick={handleHideForm}>x</button>
          <input className="add-tab-input" type="text" name="name" id="name" placeholder="Name" ref={inputName}/>
          <input className="add-tab-input" type="text" name="link" id="link" placeholder="Link" ref={inputLink}/>
          <button className="create-tab-btn" disabled={inputName.current?.value !== undefined} type='submit'>Create</button>
        </form>
      ) : <button className="add-tab-btn" onClick={handleDisplayForm}>+</button>}
    
    </AddShortcutContainer>
  )
}

export default AddShortcut