import styled from 'styled-components';

const StyledContacts = styled.ul`
  display: flex;
  flex-direction: column;

  & button {
    border: none;
    background-color: #ffffff;
    padding: 0;
    display: flex;
    cursor: pointer;
  }

  & button:hover {
    color: red;
  }

  & .global {
    color: inherit;
    width: 16px;
    height: 16px;
  }
`;

export default StyledContacts;
