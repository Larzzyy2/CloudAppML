import { demo } from '../api/demo.js';
import { Template } from 'meteor/templating';

import './demo.html'

Template.body.helpers({
    presentations(){
        return Presentations.find({});
    },
    demo(){
        return demo.find({});
    }
});

Template.body.events({
  'submit .new-presentation'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Presentations.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },
});