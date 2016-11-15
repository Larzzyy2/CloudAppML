import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';



const TemplatesTEST = BlazeToReact('templatesTEST');
const User = BlazeToReact('user');
const AddPresentation = BlazeToReact('addPresentation');
const MyPresentations = BlazeToReact('myPresentations');
const LoginButtons = BlazeToReact('loginButtons');

export default class YourPresentations  extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render () {
    return (
        <div>
        <LoginButtons />
        <User />
        <AddPresentation />
        <MyPresentations />
        </div>
    );
  }
}