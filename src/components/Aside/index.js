import React, { Component } from 'react';
import FloorList from './floor-list';
import RoomList from './room-list';

class Aside extends Component {
  render() {
    return (
    	<div className="col-sm-4">
        {/* <FloorList /> */}
        <FloorList />
    	</div>
    );
  }
}
export default Aside;
