import React from 'react';

import { Header as HeaderBox, MiniLogo, NavBar, ButtonsSec } from './styles';
import { BtnBox } from '~/styles/button';

// Components
import NavItem from '~/components/NavItem/index';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderBox>
        <NavBar>
          <MiniLogo src="https://cdn.iconscout.com/icon/free/png-512/twitch-20-721977.png" />
          <NavItem actived icon="fas fa-bell" name="Discover" />
          <NavItem icon="fas fa-bong" name="Browser" />
        </NavBar>
        <ButtonsSec>
          <BtnBox>Teste</BtnBox>
          <BtnBox bgColor="#a970ff" color="#fff">
            Sign up
          </BtnBox>
        </ButtonsSec>
      </HeaderBox>
    );
  }
}
