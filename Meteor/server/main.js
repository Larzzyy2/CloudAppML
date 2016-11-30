import { Meteor } from 'meteor/meteor';

import './accounts-config.js'

Meteor.startup(() => {
});

Meteor.publish('myPresentations', function(){
    var currentUserId = this.userId;
    return Presentations.find({createdBy: currentUserId});
});

Meteor.publish('googleDetails', function(){
      return Meteor.users.find({_id: this.userId});
});