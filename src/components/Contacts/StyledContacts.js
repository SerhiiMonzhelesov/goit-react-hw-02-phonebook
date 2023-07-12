import styled from 'styled-components';

const StyledContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 315px;

  & button {
    border: none;
    background-color: inherit;
    padding: 0;
    display: flex;
    cursor: pointer;
    color: #9e9a9a;
  }

  & button:hover {
    color: #f26969;
  }

  & .icon {
    color: inherit;
    width: 14px;
    height: 14px;
  }

  & li {
    display: flex;
    gap: 10px;
    border: 1px solid #cce2ce4d;
    padding: 10px 10px 10px 25px;
    justify-content: space-between;
    border-radius: 10px;
    background: #dcf1e759;
    font-size: 12px;
    box-shadow: 3px 3px 5px 0px #d7d3d3;
  }

  & p {
    margin: 0;
  }
`;

export default StyledContacts;
