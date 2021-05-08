import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Shortcut = styled(Link)`
  color: inherit;
  display: block;
  padding: 16px 16px 16px 20px;
  border-bottom: 1px solid #333;
  text-decoration: none;

  &:hover {
    background-color: #323232;
    cursor: pointer;
  }
`

export default Shortcut