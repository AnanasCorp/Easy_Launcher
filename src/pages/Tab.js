import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Redirect } from 'react-router-dom'

import { Layout } from '../components'
import ShortcutContainer from '../components/ShortcutContainer'

import './Tab.scss'

const utils = require('../utils')

const Tab = () => {
  const { id } = useParams()
  let [redirect, setRedirect] = useState(false)


  const checkLogged = () => {
    if (!utils.getCookie('userData')) {
        return true
    }

    return false;
  }

  useEffect(() => {
    redirect = checkLogged()
    setRedirect(redirect);
  }, [])

  if(redirect) {
    return(<Redirect to={'/login'}/>)
  }

  return (
    <Layout>
      <h1>{id}</h1>
      <ShortcutContainer tab={id}/>
    </Layout>
  )
}

export default Tab