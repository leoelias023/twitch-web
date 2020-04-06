import React from 'react';

import Users from '~/data/users';

import ItemChannel from '~/components/ItemChannel/index';

import { AsideBox, IconAside, ListChannels, LinkAside } from './styles';

import { ReactComponent as MyFriendsLogo } from '~/assets/my_friends_icon.svg';

export default function AsideLives() {
  const Element = Users.map((user) => {
    return (
      <ItemChannel
        key={user.name}
        name={user.name}
        category={user.category}
        transmission={user.transmission}
        isOn
        icon={user.iconUrl}
      />
    );
  });

  return (
    <AsideBox>
      <IconAside to="/">
        <i className="far fa-heart" />
      </IconAside>
      <ListChannels>{Element}</ListChannels>
      <LinkAside to="/">
        <MyFriendsLogo />
      </LinkAside>
    </AsideBox>
  );
}
