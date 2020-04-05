import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const AsideBox = styled.div`
  height: calc(100vh - 50px);
  width: 50px;
  background-color: #1f1f23;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const IconAside = styled(Link)`
  color: #f3f3f3;
  font-size: 15px;
`;

export const ListChannels = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const LinkAside = styled(Link)`
  margin: 10px 0;
`;
