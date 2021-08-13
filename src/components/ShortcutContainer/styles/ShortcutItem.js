import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Shortcut = styled(Link)`
  position: relative;
  color: inherit;
  display: block;
  padding: 16px 16px 16px 4px;
  margin: .5rem;
  border: 1px solid #333;
  border-radius: 16px;
  text-decoration: none;

  &:hover {
    background-color: #323232;
    cursor: pointer;
  }

  img {
    margin: 0 .5rem -.2rem;
  }

  .shortcut-remove-btn {
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

export default Shortcut