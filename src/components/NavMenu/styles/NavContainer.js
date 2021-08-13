import styled from 'styled-components'

const TabContainer = styled('div')`
    border-right: 1px solid #333;
    height: 100vh;
    width: 240px;

    a {
        text-decoration: none;
        color: white;
    }

    .edit-tabs {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
    }
`

export default TabContainer