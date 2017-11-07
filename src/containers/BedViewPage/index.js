import React, { Component } from 'react';
import PatientDetail from './patient-detail';

class BedViewPage extends Component {
  render() {
    return (
      <div className="col-sm-8">
        <PatientDetail />
      </div>
    );
  }
}
export default BedViewPage;
