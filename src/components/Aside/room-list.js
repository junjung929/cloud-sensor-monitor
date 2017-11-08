import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRoom, selectContent } from '../../actions/index';
import BedList from './bed-list';
import { bindActionCreators } from 'redux';

class RoomList extends Component {
  renderRooms(roomNumber) {
    if (!this.props.selectedRoom) { return }
    if (this.props.selectedRoom.number == roomNumber) {
      return <BedList />
    }
  }
  renderList() {
    return this.props.rooms.map((room) => {
      if (room.floor == this.props.floor.number) {
        return (
          <li
            className="list-group-item"
            key={room.number + "room"}>
            <a
              onClick={() => { this.props.selectRoom(room), this.props.selectContent('room') }}
              className="list-group-item">
              Room No.{room.number}
            </a>
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
    selectedRoom: state.cloudSensorMonitor.room_selected,
    floor: state.cloudSensorMonitor.floor_selected

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRoom: selectRoom, selectContent: selectContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);

