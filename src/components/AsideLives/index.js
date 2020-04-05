import React from 'react';

import ItemChannel from '~/components/ItemChannel/index';

import { AsideBox, IconAside, ListChannels, LinkAside } from './styles';

import { ReactComponent as MyFriendsLogo } from '~/assets/my_friends_icon.svg';

export default function AsideLives() {
  return (
    <AsideBox>
      <IconAside to="/">
        <i className="far fa-heart" />
      </IconAside>
      <ListChannels>
        <ItemChannel
          name="collabcode"
          category="Ciência e tecnologia"
          transmission="Trabalhando em um freela wordpress"
          isOn
          icon="https://static-cdn.jtvnw.net/jtv_user_pictures/4f3bdf9f-6cc2-4148-8ffc-502707680ca5-profile_image-70x70.png"
        />
        <ItemChannel
          name="edu"
          category="Ciência e tecnologia"
          transmission="Trabalhando em um freela wordpress"
          icon="https://static-cdn.jtvnw.net/jtv_user_pictures/0ebc748f-8c79-4831-b105-c10b9ffa957e-profile_image-70x70.png"
          isOn
        />
        <ItemChannel
          isOn={false}
          name="livinginweelchair"
          category="Ciência e tecnologia"
          transmission="Trabalhando em um freela wordpress"
          icon="https://static-cdn.jtvnw.net/jtv_user_pictures/5d60c341-feb0-431d-bff0-e9c8145db5f8-profile_image-70x70.png"
        />
        <ItemChannel
          name="test4"
          category="Ciência e tecnologia"
          transmission="Trabalhando em um freela wordpress"
          icon="https://static-cdn.jtvnw.net/jtv_user_pictures/0ebc748f-8c79-4831-b105-c10b9ffa957e-profile_image-70x70.png"
          isOn
        />
        <ItemChannel
          name="test5"
          category="Ciência e tecnologia"
          transmission="Trabalhando em um freela wordpress"
          icon="https://static-cdn.jtvnw.net/jtv_user_pictures/0ebc748f-8c79-4831-b105-c10b9ffa957e-profile_image-70x70.png"
          isOn
        />
        <ItemChannel
          name="test6"
          category="Ciência e tecnologia"
          transmission="Trabalhando em um freela wordpress"
          icon="https://static-cdn.jtvnw.net/jtv_user_pictures/0ebc748f-8c79-4831-b105-c10b9ffa957e-profile_image-70x70.png"
          isOn
        />
      </ListChannels>
      <LinkAside to="/">
        <MyFriendsLogo />
      </LinkAside>
    </AsideBox>
  );
}
