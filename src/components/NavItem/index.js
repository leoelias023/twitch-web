import React from 'react';

import PropType from 'prop-types';

import { NavCompleteItem, NavItem as NavItemed, Disclaimer } from './styles';

export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleHoverItem() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { name, actived, icon } = this.props;
    const { isActive } = this.state;
    return (
      <NavCompleteItem>
        <NavItemed
          isOn={isActive}
          actived={actived}
          onMouseEnter={() => {
            setTimeout(() => {
              this.handleHoverItem();
            }, 100);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              this.handleHoverItem();
            }, 100);
          }}
        >
          <i className={icon} />
        </NavItemed>
        <Disclaimer isOn={isActive}>{name}</Disclaimer>
      </NavCompleteItem>
    );
  }
}

NavItem.propTypes = {
  name: PropType.string,
  actived: PropType.bool,
  icon: PropType.string,
};

NavItem.defaultProps = {
  name: PropType.string,
  icon: PropType.string,
  actived: PropType.bool,
};
