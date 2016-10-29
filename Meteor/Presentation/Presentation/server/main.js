import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('myPresentations', function(){
    var currentUserId = this.userId;
    return Presentations.find({createdBy: currentUserId});
})

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