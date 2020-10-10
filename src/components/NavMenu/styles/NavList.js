import styled from 'styled-components'

import NavItem from './NavItem'

const NavList = styled('div')`
  border-bottom: 1px solid black;
  border-top: 1px solid black;

  ${NavItem}:not(:last-child) {
    border-bottom: 1px solid black;
  }
`

export default NavList