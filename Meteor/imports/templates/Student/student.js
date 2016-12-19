import './student.html';

Meteor.subscribe('Questions');
Meteor.subscribe('myPresentations');
Meteor.subscribe('Answers');

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
        
        var data =  Questions.findOne({ Show: true });
        console.log(data);
        console.log(data._id);
        var questionid = data._id;
        Answers.insert({
            Answer: AnswerString
            , QuestionID: questionid
        });
    }
});