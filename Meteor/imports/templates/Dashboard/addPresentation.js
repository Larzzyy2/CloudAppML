import './addPresentation.html';
Session.setDefault("newPresentation", false);

//Event for adding a Presentation
Template.addPresentation.events({

    'click #createPresentation'(){
        Session.set('newPresentation', true);
    },
    'submit #newPresentation'(e){
        
    //Creates a new presentation 
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
    target.name.value="";
        
    Session.set('newPresentation',false);
    }

});

Template.addPresentation.helpers({
    newPresentation: function(){
        return Session.get('newPresentation');
    }
});
