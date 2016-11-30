import './dashboard.html';

//Subscribe to presentations owned by the user
Meteor.subscribe('myPresentations');

//Helper for getting all Presentations
Template.dashboard.helpers({
    presentations(){
        //Gets all presentations associated with user
        var currentUserId = Meteor.userId();
        var data = Presentations.find({createdBy: currentUserId});
        return data;
    },

    
});
Template.dashboard.events({
   "click #delete" (){
       //Removes the selected presentation from collection
       Presentations.remove(this._id);
       
   },
    "click #edit" (){
        presentationID = this._id;
        FlowRouter.go('/presentations/'+presentationID);
    },
});
