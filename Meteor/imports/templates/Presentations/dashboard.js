import './dashboard.html';

//Subscribe to presentations owned by the user
Meteor.subscribe('myPresentations');

//Helper for getting all Presentations
Template.dashboard.helpers({
    presentations(){
        //Gets all presentations associated with user
        return Presentations.find({userID: Meteor.userId()});

    },

    
});
Template.dashboard.events({
   "click #delete" (){
       //Removes the selected presentation from collection
       var presentationID = this._id;
       Meteor.call('Presentations.remove', presentationID);
       
   },
    "click #edit" (){
        presentationID = this._id;
        FlowRouter.go('/presentations/'+presentationID);
    },
    "click #start" (){
        if(ClassRooms.findOne({presentationID:this.id}, {PresentationID:1})===undefined)
            {
                 Meteor.call('ClassRooms.new', this._id);
            }
        var ID = ClassRooms.findOne({PresentationID: this._id})._id;
        Session.set('currentRoomID',ID);
        FlowRouter.go("/show/"+ID);
        
    }
});
