import styled from 'styled-components';

export const BtnBox = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#333')};
  border: none;
  padding: 5px 10px;
  color: ${(props) => (props.color ? props.color : '#fff')};
  font-weight: 500;
  border-radius: 5px;
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #454545;
  }
`;

export const BtnSignUp = styled(BtnBox)`
  &:hover {
    background-color: #9362de;
  }
`;
