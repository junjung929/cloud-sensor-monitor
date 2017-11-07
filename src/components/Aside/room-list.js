import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRoom } from '../../actions/index';
import BedList from './bed-list';
import { bindActionCreators } from 'redux';

class RoomList extends Component {
  renderRooms(roomNumber){
    if(!this.props.selectedRoom){return}
    if(this.props.selectedRoom.number == roomNumber){
      return <BedList />
    }
  }
  renderList() {
    return this.props.rooms.map((room) => {
      if(room.floor == this.props.floor.number){
        return (
          <li
            key={room.number+"room"}
            onClick={() => this.props.selectRoom(room)}
            className="list-group-item">
            Room No.{room.number}
            {this.renderRooms(room.number)}
          </li>
        );
      } 
    });
  } 
  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
        {this.props.room}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  return {
      rooms: state.rooms,
      selectedRoom: state.activeRoom,
      floor: state.activeFloor
      
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRoom: selectRoom }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);

