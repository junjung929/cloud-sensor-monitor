import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PatientDetail extends Component {
    render() {
        if(!this.props.bed){
            return <div>Select a bed to get started.</div>
        }
        console.log(this.props.bed);
        return (
            <div>
                <h3>Details for:</h3>
                <div>Name: {this.props.bed.name}</div>
                <div>Room: {this.props.bed.room}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        bed: state.cloudSensorMonitor.bed_selected
    };
}

export default connect(mapStateToProps) (PatientDetail);