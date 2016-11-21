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
    },
    
});
Template.myPresentations.events({
    'submit #new-name'(e){
         e.preventDefault();

        
    //Get value from form element
    const target = e.target;
    const name = target.newName.value;
    Presentations.update({_id: this._id}, {$set: {name: name}})
    Session.set('toggleDisabled', disabled="disabled")
    
    },
    
    'submit #new-question'(e){
        e.preventDefault();
        const target = e.target;
        const question = target.newQuestion.value;
        Presentations.update({_id: this._id}, {$push: {Questions:[
            {question: question}
        ] }});
    },
    
   "click #delete" (){
       //Removes the selected presentation from collection
       Presentations.remove(this._id);
       
   },
    "click #edit" (){
        if(Session.equals("toggleDisabled", disabled="disabled"))
            {
                Session.set('toggleDisabled', '');

            }
        else
            {
                Session.set('toggleDisabled', disabled="disabled")
                //Input field is disabled
            }
        
    },
});
