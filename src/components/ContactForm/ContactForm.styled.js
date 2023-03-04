import styled from 'styled-components';

export const FormAddContact = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const LabelContactForm = styled.label`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputContactForm = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 24px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 2px solid green;
  box-shadow: 4px 4px 8px 0px rgb(23 24 23 / 20%);
`;

export const ButtonSubmit = styled.button`
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background: #79ed7a;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgb(23 24 23 / 20%);
  cursor: pointer;
`;
