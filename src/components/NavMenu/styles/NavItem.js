import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Tab = styled(Link)`
  color: black;
  display: block;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`

export default Tab