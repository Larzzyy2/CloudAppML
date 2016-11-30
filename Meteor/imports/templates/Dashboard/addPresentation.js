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
    
    //var readableDate = date.toLocaleDateString();
    do {
        var date = new Date();
        var x = Random.fraction()*100000
        var code = parseInt(x,10);
    }
    while(Presentations.findOne({AccessCode: code})!==undefined)    
   
        
    //Insert Presentation into collection
        Presentations.insert({
            name: name,
            createdBy: currentUserId,
            dateCreated: date,
            AccessCode: code
        });
    

    
    //Clear form
    e.target.name.value="";
    
    },
})

