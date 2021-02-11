import styled from 'styled-components'

import NavItem from './NavItem'

const NavList = styled('div')`
  border-top: 1px solid black;

  ${NavItem} {
    border-bottom: 1px solid black;
  }
`

export default NavList