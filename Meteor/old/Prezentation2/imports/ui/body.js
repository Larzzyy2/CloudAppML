import { Template } from 'meteor/templating';
 
import { Images } from '../api/images.js';

import { ReactiveVar } from 'meteor/reactive-var';

import './body.html';


Template.body.onCreated(function bodyOncreated(){
	this.counter = new ReactiveVar(1);
});
 
Template.body.helpers({
  images() {
    return Images.find({id : instance.counter.get()});
  }
});

Template.body.events({
    'click .next-image'(){
    instance.counter.set(instance.counter.get() + 1);
        
    }
});