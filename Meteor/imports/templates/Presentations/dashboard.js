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
        console.log(this._id);
        debugger
        if(ClassRooms.findOne({PresentationID:this._id})===undefined)
        {
        if(Questions.findOne({PresentationID:this._id})!==undefined)
            {
            var code = null;
            //Loop that prevents dupblicate accessCodes
            do 
            {
            var x = Random.fraction()*100000
            code = parseInt(x,10);
            }
            while(ClassRooms.findOne({AccessCode: code})!==undefined)
        Meteor.call('ClassRooms.new', this._id, code);
            }
            else
                {
                    window.alert("No Questions attached to this presentation, please add a question.");
                    FlowRouter.go('/presentations/'+this._id);
                }
        }
        var ID = ClassRooms.findOne({PresentationID: this._id})._id;
        Session.set('currentRoomID',ID);
        FlowRouter.go("/show/"+ID);
        
    }
});
