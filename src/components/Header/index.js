import React, { Component } from 'react';
import Title from './title';
import NavBar from '../NavBar';

class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* <NavBar /> */}
        <Title />
      </div>
    );
  }
}
export default Header;
