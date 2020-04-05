import styled from 'styled-components';

export const Disclaimer = styled.span`
  background-color: #fff;
  border-radius: 5px;
  padding: 2px 10px;
  font-size: 12px;
  display: ${(props) => (props.isOn ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 55px;
`;

export const NavItem = styled.a`
  border-bottom: ${(props) => (props.actived ? '2px solid #a970ff' : 'none')};
  display: flex;
  height: 50px;
  align-items: flex-end;
  padding-bottom: 15px;
  font-size: 17px;
  justify-content: center;
  width: 50px;
  color: ${(props) => (props.actived || props.isOn ? '#a970ff' : '#fff')};
  cursor: pointer;
`;

export const NavCompleteItem = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
