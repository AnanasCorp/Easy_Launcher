import styled from 'styled-components'

import ShortcutItem from './ShortcutItem'

const ShortcutList = styled('div')`
  border-top: 1px solid #333;
  margin-bottom: 2rem;

  ${ShortcutItem} {
    border-bottom: 1px solid #333;
  }
`

export default ShortcutList