import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

// export const ContactText = styled.span`
//   font-size: 24px;

//   &::before {
//     content: '✔️';
//     margin-right: 5px;
//     font-size: 24px;
//   }
// `;

export const ContactText = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
    /* font-size: 24px; */
    width: 30px;
    height: 30px;
    fill: #086908;
  }
`;
export const DeleteBtn = styled.button`
  padding: 8px 10px;
  font-size: 16px;
  font-weight: bold;
  background: #f7a9a3;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgb(23 24 23 / 20%);
  cursor: pointer;
`;
