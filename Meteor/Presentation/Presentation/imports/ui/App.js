import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


import Nav  from './Nav.js';
import YourPresentations  from './Pages/YourPresentations.js';
import Settings  from './Pages/Settings.js';


const DemoPages = { YourPresentations, Settings };

export default class App  extends Component {
	constructor(props) {
  	super(props);

		this.state = {
 			currentTab: 'YourPresentations',
 		};
 		this.changeTab = this.changeTab.bind(this);
	}

  changeTab(tab) {
      this.setState({ currentTab: tab });
  }

	render() {

		const DemoPage = DemoPages[this.state.currentTab];

  	return (
  		<div>
				<Nav changeTab={this.changeTab} DemoPages={DemoPages} currentTab={this.state.currentTab} />
				<DemoPage />
				
			</div>
		);
	}
}

