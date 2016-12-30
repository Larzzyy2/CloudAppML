import './addPresentation.html';

//Event for adding a Presentation
Template.addPresentation.events({
    'submit #newPresentationName'(e){
    //Creates a new presentation 
    e.preventDefault();
    //Get value from form element
    const target = e.target;
    const presentationName = target.name.value;
        
    //Call Meteor method
    Meteor.call('Presentations.add', presentationName);
    
    //Clear form
    target.name.value="";
    },
    "click #ok"(){
         $('#myModal').modal('hide');
    }
    

});