import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBed } from '../../actions/index';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';


class BedList extends Component {
  renderList() {
    return this.props.beds.map((bed) => {
      if(bed.floor == this.props.room.floor && bed.room == this.props.room.number){
        return (
          <li
            key={bed.name}
            onClick={() => this.props.selectBed(bed)}
            className="list-group-item">
            {bed.name}
          </li>
        );
      }
    });
  } 
  render() {
    console.log("room active checker: ", this.props.room);
    if(!this.props.room){ return null}
    return (
      <ul className="list-group">
        {this.renderList()}
        {this.props.bed}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  return {
      beds: state.beds,
      room: state.cloudSensorMonitor.room_selected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBed: selectBed }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BedList);

