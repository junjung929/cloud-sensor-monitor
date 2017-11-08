import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Aside from './Aside';
import Container from '../containers';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
    	<div>
	    	<Header />
	    	<Aside />
				<Container />
				<div className="divisionLine" />
	    	<Footer />
    	</div>
    );
  }
}
