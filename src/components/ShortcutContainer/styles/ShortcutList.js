import styled from 'styled-components'

const ShortcutList = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 1rem;

  .edit-shortcuts {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`

export default ShortcutList