import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ItemChannel = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 10px 0;
  cursor: pointer;
`;

export const IconChannel = styled.img`
  border-radius: 50%;
  width: 30px;
`;

export const StatusChannel = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) => (props.status ? '#6ede3a' : 'red')};
`;

export const DescBox = styled.div`
  width: ${(props) => (props.isOpened ? '200px' : '0px')};
  height: 150px;
  border-radius: 10px;
  position: absolute;
  background-color: #19191c;
  left: 40px;
  top: ${(props) => (props.posY ? props.posY : '20px')};
  margin: 20px;
  transition: width 0.3s, padding 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.isOpened ? '20px' : '0px')};
`;

export const NameAndTitle = styled.span`
  color: #f4f4f4;
  text-align: center;
  font-size: 15px;
`;

export const Transmission = styled(NameAndTitle)`
  font-size: 12px;
`;

export const BtnVisit = styled.a`
  background-color: #9147ff;
  border-radius: 20px;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
`;
