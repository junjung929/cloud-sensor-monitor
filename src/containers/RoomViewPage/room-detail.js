import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBed, selectContent } from '../../actions/index';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

class RoomDetail extends Component {
    renderThumb() {
        return this.props.beds.map((bed) => {
            if(bed.floor == this.props.room.floor && bed.room == this.props.room.number){
                return (
                    <div 
                        key={`bedThumb-${bed.name}`}
                        className="bedThumb col-sm-4 selectable" 
                        onClick={() => {this.props.selectBed(bed), this.props.selectContent('bed')}}>
                        <div>
                            <img className='thumbImg' src="http://ext.fmkorea.com/files/attach/new/20160809/486263/1104102/433434686/73b83a6230b7079608ccf48237c627e9.jpg" />
                        </div>
                        <div>Patient Name: {bed.name}</div>
                    </div>
                )
            }
        });
    }
    render() {
        if(!this.props.room){
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
        beds: state.beds,
        room: state.cloudSensorMonitor.room_selected
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBed: selectBed, selectContent: selectContent }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RoomDetail);