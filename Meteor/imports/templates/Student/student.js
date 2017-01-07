import './student.html';

Meteor.subscribe('Questions');
Meteor.subscribe('myPresentations');
Meteor.subscribe('Answers');
Meteor.subscribe('ClassRooms')


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
    
    if(ClassRooms.findOne({AccessCode: code},{AccesCode: 1})===undefined)
    {
        window.alert("Classroom does not exist!");
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
        var data = Questions.find({ Show: true});
        return data;
    },

    
});

Template.AnswerStudentLayout.events({
    'submit #formAnswer' (e) {
        //Creates a new presentation 
        e.preventDefault();
        //Get value from form element
        const target = e.target;
        const AnswerString = target.answer.value;
        var ID = 0; //NOG JUISTE ID MEEGEVEN, LARS NOG MEE BEZIG
        var data =  Questions.findOne({ Show: true }); //currentQuestionID???????????????????
        Meteor.call('ClassRooms.Answer', ID, data, AnswerString);
    }
});