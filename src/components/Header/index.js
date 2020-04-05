import React from 'react';
import { Link } from 'react-router-dom';

import { Header as HeaderBox, NavBar, ButtonsSec } from './styles';
import { BtnBox, BtnSignUp } from '~/styles/button';

// Components
import NavItem from '~/components/NavItem/index';

// Images
import { ReactComponent as MiniLogoSvg } from '~/assets/mini_logo_header.svg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HeaderBox>
        <NavBar>
          <Link to="/test">
            <MiniLogoSvg alt="Logo da twitch" />
          </Link>
          <NavItem actived icon="fas fa-bell" name="Discover" />
          <NavItem icon="fas fa-bong" name="Browser" />
        </NavBar>
        <ButtonsSec>
          <BtnBox>Teste</BtnBox>
          <BtnSignUp bgColor="#a970ff" color="#fff">
            Sign up
          </BtnSignUp>
        </ButtonsSec>
      </HeaderBox>
    );
  }
}
