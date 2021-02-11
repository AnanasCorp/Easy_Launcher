import React, { useCallback, useRef, useState } from 'react'

import { AddTabContainer } from './styles'

const AddTab = () => {
  const inputRef = useRef()
  const [isFormVisible, setFormVisible] = useState(false)

  const handleSubmit = useCallback(async e => {
    e.preventDefault()

    if (!inputRef.current.value) return 

    const userData = JSON.parse(sessionStorage.getItem('userData'))
    console.log(userData)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: inputRef.current.value, uid: userData.uid })
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/addTab`, requestOptions);
    const data = await response.json()

    if (data.success) {
      // dégueu, c'est pour que les nouvelles tabs soit affichées.
      // plus tard ce sera gérer par un context / un truc qui va rerender la list automatiquement
      window.location.reload()
    } else {
      console.error('error when adding tab')
    }

    handleHideForm()
  }, [inputRef])

  const handleDisplayForm = useCallback(() => setFormVisible(true), [setFormVisible])
  const handleHideForm = useCallback(() => setFormVisible(false), [setFormVisible])

  return (
    <AddTabContainer>
      {isFormVisible ? (
        <form onSubmit={handleSubmit} method="POST">
          <button onClick={handleHideForm}>x</button>
          <input type="text" name="tabName" id="tabName" placeholder="tab name" ref={inputRef}/>
          <button disabled={inputRef.current?.value !== undefined} type='submit'>create tab</button>
        </form>
      ) : <button onClick={handleDisplayForm}>+</button>}
    
    </AddTabContainer>
  )
}

export default AddTab
