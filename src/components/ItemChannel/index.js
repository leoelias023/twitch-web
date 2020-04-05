import React from 'react';

import {
  ItemChannel as ChannelBox,
  IconChannel,
  StatusChannel,
  DescBox,
  NameAndTitle,
  Transmission,
  BtnVisit,
} from './styles';

export default class ItemChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      boxOffSet: '0px',
    };
    this.boxChannel = React.createRef();
  }

  componentDidMount() {
    const { name } = this.props;
    this.setState({
      boxOffSet: `${
        document.getElementById(`channel_item_${name}`).offsetTop
      }px`,
    });
  }

  handleCard() {
    const { isOpened } = this.state;
    this.setState({
      isOpened: !isOpened,
    });
  }

  render() {
    const { isOn, icon, name, category, transmission } = this.props;
    const { isOpened, boxOffSet } = this.state;
    return (
      <div
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => {
          this.handleCard();
        }}
        onMouseLeave={() => {
          this.handleCard();
        }}
      >
        <ChannelBox id={`channel_item_${name}`}>
          <IconChannel src={icon} alt="Imagem do Canal X" />
          <StatusChannel status={isOn} />
        </ChannelBox>
        <DescBox posY={boxOffSet} isOpened={isOpened}>
          <NameAndTitle>
            {name} · {category}
          </NameAndTitle>
          <Transmission>{transmission}</Transmission>
          <BtnVisit>Channel</BtnVisit>
        </DescBox>
      </div>
    );
  }
}

ItemChannel.propTypes = {
  isOn: Boolean,
  icon: String,
  name: String,
  category: String,
  transmission: String,
};

ItemChannel.defaultProps = {
  isOn: Boolean,
  name: String,
  transmission: 'Nenhuma transmissão encontrada',
  category: 'Nenhuma categoria encontrada',
  icon:
    'https://static-cdn.jtvnw.net/jtv_user_pictures/5d60c341-feb0-431d-bff0-e9c8145db5f8-profile_image-70x70.png',
};
