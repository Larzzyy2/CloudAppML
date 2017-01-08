import './student.html';

Meteor.subscribe('Questions');
Meteor.subscribe('myPresentations');
Meteor.subscribe('Answers');
Meteor.subscribe('ClassRooms');
Meteor.subscribe('AnswerOptions');

RoomData = null;
allQuestions = null;
allAnswersOptions = null;

currentQuestionObject = null;

questionIsOpen = null;

code = null;

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

Template.AnswerStudentLayout.onCreated(function () {
    RoomData = ClassRooms.findOne({
        AccessCode: code
    });
    var currentPresentationID = RoomData.PresentationID;
    allQuestions = Questions.find({
        PresentationID: currentPresentationID
    }).fetch();
    
    currentQuestionObject = Questions.findOne({
        _id: RoomData.currentQuestionID
    });
    if (typeof currentQuestionObject.Type === "string") {
        questionIsOpen = false;
    }
    else {
        questionIsOpen = true;
    }
});

Template.AnswerStudentLayout.helpers({
    RoomData() {
            return RoomData;
        }, currentQuestion() {
            return Questions.findOne({
                _id: RoomData.currentQuestionID
            });
            currentQuestionObject = Questions.findOne({
                _id: RoomData.currentQuestionID
            });
        }, allAnswersOptions() {
            return AnswerOptions.find({});
        },
    IsOpen(){
        return questionIsOpen;
    }
});

Template.AnswerStudentLayout.events({
    'submit #formAnswer' (e) {
        //Creates a new presentation 
        e.preventDefault();
        //Get value from form element
        const target = e.target;
        const AnswerString = target.answer.value;
        var ID = RoomData.currentQuestionID;
        Meteor.call('ClassRooms.Answer', ID, AnswerString);
    }
});