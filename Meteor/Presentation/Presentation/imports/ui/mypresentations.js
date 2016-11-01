import './myPresentations.html';
import { Session } from 'meteor/session'

//Subscribe to presentations owned by the user
Meteor.subscribe('myPresentations');
Session.set('toggleDisabled', disabled="disabled");

//Helper for getting all Presentations
Template.myPresentations.helpers({
    presentations(){
        //Gets all presentations associated with user
        var currentUserId = Meteor.userId();
        var data = Presentations.find({createdBy: currentUserId});
        return data;
    },
    toggleDisabled: function(){
        return Session.get('toggleDisabled');
    }
    
});
Template.myPresentations.events({
   "click #delete" (event){
       //Removes the selected presentation from collection
       Presentations.remove(this._id);
       
   },
    "click #edit" (event){
        if(Session.equals("toggleDisabled", disabled="disabled"))
            {
                Session.set('toggleDisabled', '');
                //Input field can be edited
                //TODO Callback to database when value is changed
                //Presentations.update({_id: this._id}, {$set: {name: updatedName}})
            }
        else
            {
                Session.set('toggleDisabled', disabled="disabled")
                //Input field is disabled
            }
        
    }
});
