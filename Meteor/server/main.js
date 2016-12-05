import { Meteor } from 'meteor/meteor';

import './accounts-config.js'

Meteor.startup(() => {

  if (Types.find().count() === 0) {
      Types.insert({name: 'Multiple Choice'});
      Types.insert({name: 'Open'});
  }

});

Meteor.publish('myPresentations', function(){
    var currentUserId = this.userId;
    return Presentations.find({createdBy: currentUserId});
});

Meteor.publish('googleDetails', function(){
      return Meteor.users.find({_id: this.userId});
});

Meteor.publish('Types', function(){
    return Types.find();
});

Meteor.publish('Questions', function(){
    return Questions.find();
});