import styled from 'styled-components'

const AddShortcutContainer = styled('div')`
  margin: 1rem 0;

  button {
    color: #ccc;
    background-color: transparent;
    cursor: pointer;
  }

  .add-tab-btn {
    display: block;
    width: 150px;
    margin: 2rem auto 0;
    border: 1px solid #333;
    border-radius: 24px;
    font-size: 32px;
  }

  .cancel-tab-btn {
    border: 1px solid #333;
    margin: 0 0.25rem;
  }

  .create-tab-btn {
    display: block;
    margin: 6px auto 0;
    padding: .25rem .75rem;
    border: 1px solid #333;
    border-radius: 16px;
    font-size: 12px;
  }

  .add-tab-input {
    border: 0;
    border-bottom: 1px solid #333;
    padding-left: .25rem;
    background-color: transparent;
    color: #ccc;
  }
`

export default AddShortcutContainer