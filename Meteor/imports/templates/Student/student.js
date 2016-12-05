import './student.html';

//helper schrijven voor access code te checken!! 

Template.StudentLayout.events({

    'submit #formAccesKey'(e){
        
    //Creates a new presentation 
    e.preventDefault();
    //Get value from form element
    const target = e.target;
    const name = target.name.value; 
    
    var code = parseInt(name);
    
    console.log(name);
    
    if(Presentations.findOne({AccessCode: code},{AccesCode: 1})===undefined)
    {
        window.alert("Presentation doesn't exist!");
    }
        else{
            FlowRouter.go("/student/"+code);
        }
    }
});
