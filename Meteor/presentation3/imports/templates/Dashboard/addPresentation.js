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
    //var readableDate = date.toLocaleDateString();
        
    var x = Random.fraction()*1000
    var AccessCode = parseInt(x,10);
    //Insert Presentation into collection
    Presentations.insert({
        name: name,
        createdBy: currentUserId,
        dateCreated: date,
        AccessCode: AccessCode,
    });
    
    //Clear form
    e.target.name.value="";
    
    },
})

