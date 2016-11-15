import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export default class YourPresentations  extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render () {
    return (
      <div>
        Your Presentations!
      </div>
    );
  }
}
