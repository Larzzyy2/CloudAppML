import './dashboard.html';

//Subscribe to presentations owned by the user
Meteor.subscribe('myPresentations');

//Helper for getting all Presentations
Template.dashboard.helpers({
    presentations(){
        //Gets all presentations associated with user
        return Presentations.find({createdBy: Meteor.userId()});

    },

    
});
Template.dashboard.events({
   "click #delete" (){
       //Removes the selected presentation from collection
       var presID = this._id;
       Meteor.call('Presentations.remove', presID);
       
   },
    "click #edit" (){
        presentationID = this._id;
        FlowRouter.go('/presentations/'+presentationID);
    },
    "click #start" (){
        console.log("start presentation");
        Session.set("currentPresentationID", this._id);
        presentationID = this._id;
        FlowRouter.go('/show/' + presentationID);
    }
});
