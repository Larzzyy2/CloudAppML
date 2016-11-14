import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export default class Times  extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render () {
    return (
      <div>
        Times
        <p>This simple demo uses page Components that have the same name as they display in the Nav bar</p>
      </div>
    );
  }
}
