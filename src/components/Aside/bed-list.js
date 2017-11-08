import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBed, selectContent } from '../../actions/index';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';


class BedList extends Component {
  renderList() {
    return this.props.beds.map((bed) => {
      if(bed.floor == this.props.room.floor && bed.room == this.props.room.number){
        return (
          <li
            key={bed.name}
            className="list-group-item">
            <a
              onClick={() => {this.props.selectBed(bed), this.props.selectContent('bed')}}
              className="list-group-item">
              {bed.name}
            </a>
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
  return bindActionCreators({ selectBed: selectBed, selectContent: selectContent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BedList);

