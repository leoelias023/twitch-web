import React from 'react';

// Components
import Header from '~/components/Header/index';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Header />;
  }
}
