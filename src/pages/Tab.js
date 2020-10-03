import React from 'react'
import { useParams } from 'react-router-dom'

import { Layout } from '../components'

const Tab = () => {
  const { id } = useParams()

  return (
    <Layout>
      <h1>{id}</h1>
    </Layout>
  )
}

export default Tab