import './student.html';

Meteor.subscribe('Questions');
Meteor.subscribe('myPresentations');

var code = undefined;

Template.StudentLayout.events({

    'submit #formAccesKey'(e){
        
    //Creates a new presentation 
    e.preventDefault();
    //Get value from form element
    const target = e.target;
    const name = target.name.value; 
    
    code = parseInt(name);
    
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

//Helper for getting all Presentations
Template.AnswerStudentLayout.helpers({
    Questions(){
        //Gets all questions associated with presentation
        var data = Questions.find({AccesCode: code, Show: true});
        return data;
    },

    
});