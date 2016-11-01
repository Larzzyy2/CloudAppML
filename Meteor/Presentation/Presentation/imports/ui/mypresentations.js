import './myPresentations.html';

//Subscribe to presentations owned by the user
Meteor.subscribe('myPresentations');

//Helper for getting all Presentations
Template.myPresentations.helpers({
    presentations(){
        //Gets all presentations associated with user
        var currentUserId = Meteor.userId();
        var data = Presentations.find({createdBy: currentUserId});
        return data;
    },
});
Template.myPresentations.events({
   "click #delete" (event){
       Presentations.remove(this._id);
       
   },
    "click #edit" (event){
        //Code for editing the presentation name
    }
});
