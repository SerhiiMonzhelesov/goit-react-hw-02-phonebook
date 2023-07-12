import styled from 'styled-components';

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: start;
  justify-content: center;
  width: 100%;
  border: 1px solid black;
  padding: 15px;

  & label {
    font-size: 12px;
    text-align: end;
    width: 100%;
    max-width: 240px;
  }
  & input {
    font-size: 10px;
    margin-left: 15px;
    padding: 4px;
    border-radius: 5px;
    border: 1px solid #878987;
    border-left: none;
    border-top: none;
    box-shadow: 3px 3px 5px 0px #d7d3d3;
  }
`;

export default StyledContactForm;
