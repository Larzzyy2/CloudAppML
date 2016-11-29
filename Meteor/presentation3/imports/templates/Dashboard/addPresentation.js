import './addPresentation.html';

//Event for adding a Presentation
Template.addPresentation.events({
    //Creates a new presentation
    'submit #new-presentation'(e){
    //prevent default browser form submit
    e.preventDefault();

        
    //Get value from form element
    const target = e.target;
    const name = target.name.value;
    var currentUserId = Meteor.userId();
    var date = new Date();
    var readableDate = date.toLocaleDateString();
    //Insert Presentation into collection
    Presentations.insert({
        name: name,
        createdBy: currentUserId,
        dateCreated: readableDate,
        AccessCode: 0,
        Questions: Object()
        
    });
    
    //Clear form
    e.target.name.value="";
    
    },
})

