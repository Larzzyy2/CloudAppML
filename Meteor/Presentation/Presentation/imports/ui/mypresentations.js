import './mypresentations.html';

Meteor.subscribe('myPresentations');

Template.mypresentations.helpers({
    presentations(){
        var currentUserId = Meteor.userId();
        var data = Presentations.find({createdBy: currentUserId});
        return data;
    },
});
Template.mypresentations.events({
    'submit #new-presentation'(e){
    //prevent default browser form submit
    e.preventDefault();

        
    //Get value from form element
    const target = e.target;
    const name = target.name.value;
    var currentUserId = Meteor.userId();
    //Insert Presentation into collection
    Presentations.insert({
        name: name,
        createdBy: currentUserId
        
    });
    
    //Clear form
    e.target.name.value="";
    
    },
})