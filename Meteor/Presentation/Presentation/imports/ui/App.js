import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

// import  Home  from './Pages.jsx';
// import  Away  from './Pages.jsx';
// import  Fun  from './Pages.jsx';


import Nav  from './Nav.js';
import Times  from './Times.js';
import TEST  from './TEST.js';


const Home = () => {
  return (
    <div>
      This
    </div>
  );
};

const Away = () => {
  return (
    <div>
      Is
    </div>
  );
};

const Fun = () => {
  return (
    <div>
      Awesome
    </div>
  );
};


const DemoPages = { Home, Away, Fun, Times, TEST };

export default class App  extends Component {
	constructor(props) {
  	super(props);

		this.state = {
 			currentTab: 'Home',
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

