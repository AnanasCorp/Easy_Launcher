import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Tab = styled(Link)`
  color: inherit;
  display: block;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
    background-color: #323232;
    cursor: pointer;
  }
`

export default Tab