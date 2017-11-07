import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Aside from './Aside';
import BedViewPage from '../containers/BedViewPage';
import Footer from './Footer';


export default class App extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	    	<Aside />
				<BedViewPage />
				<div className="divisionLine" />
	    	<Footer />
    	</div>
    );
  }
}
