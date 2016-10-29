import './mypresentations.html';

Template.mypresentations.helpers({
    presentations(){
        var data = Presentations.find();
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
        
    //Insert Presentation into collection
    Presentations.insert({
        name: name
    });
    
    //Clear form
    e.target.name.value="";
    
    },
})