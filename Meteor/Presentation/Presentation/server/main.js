import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('myPresentations', function(){
    var currentUserId = this.userId;
    return Presentations.find({createdBy: currentUserId});
});

//Publication for google data, not working

//Meteor.publish('googleDetails', function(){ 
//    return Meteor.users.find({id: this.userId},
//                            {fields: {'services.google.picture':1, 'services.google.name':1 }});
//d});

//Meteor methods for adding and delting presentations
//Meteor.methods({
//    addPresentation: function(name){
//        Presentations.insert({
//            name: name
//        });
//    },
//    deletePresentation: function(id){
//        Presentations.deleteOne(id);
//    }
//})