import styled from 'styled-components'

import NavItem from './NavItem'

const NavList = styled('div')`
  border-top: 1px solid #333;
  margin-bottom: 2rem;

  ${NavItem} {
    border-bottom: 1px solid #333;
  }
`

export default NavList