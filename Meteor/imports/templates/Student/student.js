import './student.html';
import '../style.css';

Meteor.subscribe('Questions');
Meteor.subscribe('myPresentations');
Meteor.subscribe('Answers');
Meteor.subscribe('ClassRooms');
Meteor.subscribe('AnswerOptions');

RoomData = null;
RoomID = null;
allQuestions = null;
allAnswersOptions = null;
currentQuestionID = null;
currentQuestionObject = null;
currentQuestionObjDep = new Tracker.Dependency();
questionIsOpen = null;

code = null;

var currentQuestionID = null;
var currentQuestionIdDep = new Tracker.Dependency();

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
    RoomID = ClassRooms.findOne({
        AccessCode: code
    })._id;
    console.log("RoomID: " + RoomID);
    var currentPresentationID = RoomData.PresentationID;
    allQuestions = Questions.find({
        PresentationID: currentPresentationID
    }).fetch();
    currentQuestionID = RoomData.currentQuestionID;
    
    currentQuestionObject = Questions.findOne({_id: RoomData.currentQuestionID});
    currentQuestionObjDep.changed();
    
    currentQuestionObjDep.depend();
    //DIT ZOU TELKENS OPNIEUW MOETEN GEBEUREN
    if (currentQuestionObject.Type.name === "Open") {
        Session.set('questionIsOpen', true);
        questionIsOpen = true;
    }
    else {
        Session.set('questionIsOpen', false);
        questionIsOpen = false;
    }
});

Template.AnswerStudentLayout.helpers({
    RoomData() {
        return RoomData;
    }, 
    currentQuestion() {
            var query = ClassRooms.find({_id: RoomID});
        
            var handler = query.observeChanges({
            changed: function(id, fields){
            currentQuestionID = fields.currentQuestionID;
            currentQuestionIdDep.changed();
            console.log("changed question: " + currentQuestionID);
            //Update currentQuestionObject
            currentQuestionObject = Questions.findOne({_id: currentQuestionID});
            //Update view (not working)
            if (currentQuestionObject.Type.name === "Open") {
                    Session.set('questionIsOpen', true);
                }
                else {
                    Session.set('questionIsOpen', false);
                }                
            currentQuestionObjDep.changed();
            },    
        });
        currentQuestionIdDep.depend();
        var currentQuestionString = Questions.findOne({_id: currentQuestionID}).QuestionString;
        return currentQuestionString;
        }, 
    allAnswersOptions() {
            return AnswerOptions.find({
                QuestionID : currentQuestionID
            });
        },
    IsOpen(){
        return Session.get('questionIsOpen');
    }
});

Template.AnswerStudentLayout.events({
    'submit #formAnswer' (e) {
        e.preventDefault();
        //Get value from form element
        const target = e.target;
        const AnswerString = target.answer.value;
        var ID = currentQuestionID;
        Meteor.call('ClassRooms.Answer', ID, AnswerString);
    },
    'submit #formAnswerMultiple' (e) {
        e.preventDefault();
        //Get value from form element
        const target = e.target;
        const AnswerString = target.radAnswer.value;
        var ID = currentQuestionID;
        Meteor.call('ClassRooms.Answer', ID, AnswerString);
    }
});