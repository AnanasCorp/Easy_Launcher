import React from 'react'
import { useParams } from 'react-router-dom'

import { Layout } from '../components'
import ShortcutContainer from '../components/ShortcutContainer'

import './Tab.scss'

const Tab = () => {
  const { id } = useParams()

  return (
    <Layout>
      <h1>{id}</h1>
      <ShortcutContainer tab={id}/>
    </Layout>
  )
}

export default Tab