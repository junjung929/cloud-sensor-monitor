import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import FloorViewPage from '../containers/FloorViewPage';
import RoomViewPage from '../containers/RoomViewPage';
import BedViewPage from '../containers/BedViewPage';
import HomePage from '../containers/HomePage';

class Content extends Component {
    switchContent(){
        if(!this.props.selectedMenu){return (<HomePage />);}
        switch(this.props.selectedMenu){
            case 'floor':
                return (<FloorViewPage />);
            case 'room':
                return (<RoomViewPage />);
            case 'bed':
                return (<BedViewPage />);
            default:
                return (<HomePage />);
        }
    }
    render() {
        return (
            <div className="col-sm-8">
                {this.switchContent()}
                {/* <FloorViewPage />
                <RoomViewPage />
                <BedViewPage /> */}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        selectedMenu: state.cloudSensorMonitor.content_selected
    };
  }
  
  export default connect(mapStateToProps)(Content);
