import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRoom, selectContent } from '../../actions/index';
import { bindActionCreators } from 'redux';

class FloortDetail extends Component {
    renderThumb() {
        return this.props.rooms.map((room) => {
            if(room.floor == this.props.floor.number){
                return (
                    <div 
                        key={`roomThumb-${room.number}`}
                        className="roomThumb col-sm-4 selectable" 
                        onClick={() => {this.props.selectRoom(room), this.props.selectContent('room')}}>
                        <div>
                            <img className='thumbImg' src="http://ext.fmkorea.com/files/attach/new/20160809/486263/1104102/433434686/73b83a6230b7079608ccf48237c627e9.jpg" />
                        </div>
                        <div>Room No. {room.number}</div>
                    </div>
                )
            }
        });
    }
    render() {
        if(!this.props.floor){
            return <div>Select a bed to get started.</div>
        }
        return (
            <div>
                {this.renderThumb()}
            </div>
        );
        
    }
}

function mapStateToProps(state) {
    return {
        floor: state.cloudSensorMonitor.floor_selected,
        rooms: state.rooms
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectRoom: selectRoom, selectContent: selectContent }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps) (FloortDetail);