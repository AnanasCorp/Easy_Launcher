import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Tab = styled(Link)`
  display: block;
  padding: 8px 16px;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`

export default Tab