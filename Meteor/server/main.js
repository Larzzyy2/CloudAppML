import { Meteor } from 'meteor/meteor';

import './accounts-config.js'

Meteor.startup(() => {

  if (Types.find().count() === 0) {
      Types.insert({name: 'MultipleChoice', displayName: 'Multiple Choice Question'});
      Types.insert({name: 'Open', displayName: 'Open Question'});
  }

});

Meteor.publish('myPresentations', function(userID){
    var currentUserId = this.userId;
    return Presentations.find({userID: currentUserId});
});

Meteor.publish('googleDetails', function(){
      return Meteor.users.find({_id: this.userId});
});

Meteor.publish('Types', function(){
    //Returns all types found in database
    return Types.find();
});

Meteor.publish('Questions', function(presID){//
    //Retruns Question attached to the specific presentation
    return Questions.find({presentationID:presID});
});
Meteor.publish('AnswerOptions', function(){
    return AnswerOptions.find();
});

Meteor.publish('Answers', function(){
    return Answers.find();
});

Meteor.publish('ClassRooms', function(){
    return ClassRooms.find();
});