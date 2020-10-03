import React from 'react'

import NavMenu from '../NavMenu'

import { ContentContainer, LayoutContainer } from './styles'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavMenu />
      <ContentContainer>
        {children}      
      </ContentContainer>
    </LayoutContainer>
  )
}

export default Layout
