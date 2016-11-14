import { Template } from 'meteor/templating';
import './main.html';
import '../imports/ui/login.js';
import '../imports/ui/addPresentation.js';
import '../imports/ui/myPresentations.js';


//react routing

import React from 'react';

import { Meteor } from 'meteor/meteor';

import { render } from 'react-dom';

 

import App from '../imports/ui/App.js';
 

Meteor.startup(() => {

  render(<App />, document.getElementById('app'));

});