import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './_Header.scss';


export default class Header extends Component {
  state = {
    activeItem: 'home',
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Menu
        className="app-header"
        inverted={true}
        borderless={true}
      >
      </Menu>
    );
  }
}
