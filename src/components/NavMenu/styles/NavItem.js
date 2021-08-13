import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Tab = styled(Link)`
  position: relative;
  color: inherit;
  display: block;
  padding: 16px 16px 16px 20px;
  border-bottom: 1px solid #333;
  text-decoration: none;

  &:hover {
    background-color: #323232;
    cursor: pointer;
  }

  .tab-remove-btn {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: 0;
    color: white;

    &.active {
      display: block;
    }
  }
`

export default Tab