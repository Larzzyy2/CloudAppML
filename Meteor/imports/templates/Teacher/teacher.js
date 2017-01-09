import './teacher.html';
import '../style.css';

/*Meteor.subscribe('Questions',  Session.get('currentPresentationID'));*/
Meteor.subscribe('ClassRooms');
Meteor.subscribe('AnswerOptions');
/*Meteor.subscribe('myPresentations');*/
RoomData = null;
RoomID = null;
counter = 0;
counterTracker = new Tracker.Dependency();
allQuestions = null;

allAnswersOptions = null;
allAnswersOptionsDep = new Tracker.Dependency();

var currentQuestionID = null;
var currentQuestionIdDep = new Tracker.Dependency();

Template.ShowPresentationTeacher.onCreated(function(){
    RoomID = Session.get('currentRoomID');
    RoomData = ClassRooms.findOne({_id : RoomID});
    var currentPresentationID = RoomData.PresentationID;
    allQuestions = Questions.find({PresentationID: currentPresentationID}).fetch();    
    currentQuestionID = RoomData.currentQuestionID;
});

Template.ShowPresentationTeacher.helpers({
    RoomData(){
        return RoomData;
    },
    currentQuestion(){
        var query = ClassRooms.find({_id: RoomID});
        var handler= query.observeChanges({
        changed: function(id, fields){
        currentQuestionID = fields.currentQuestionID;
        currentQuestionIdDep.changed();
        console.log("changed question: " + currentQuestionID);
            
        allAnswersOptions = AnswerOptions.find({
                QuestionID : currentQuestionID});
        allAnswersOptionsDep.changed();    
        },
    });
    currentQuestionIdDep.depend();
    var currentQuestionString = Questions.findOne({_id: currentQuestionID}).QuestionString;
    return currentQuestionString;
    },
    answerOptions() {
        allAnswersOptionsDep.depend();
        return allAnswersOptions; 
    },
    IsOpen(){
        return Session.get('questionIsOpen');
    }
});
Template.ShowPresentationTeacher.events({
    "click #left"(){
        if(counter!=0)
        {
            counter--;
            var nextQuestionID = allQuestions[counter]._id;
            console.log("current question should be: " + allQuestions[counter].QuestionString);
            Meteor.call("ClassRooms.nextQuestion", nextQuestionID, Session.get('currentRoomID'));
            
        }
        
    },
    "click #right"(){
        if(counter!=allQuestions.length-1)
        {
            counter++;
            var nextQuestionID = allQuestions[counter]._id;
            console.log("current question should be: " + allQuestions[counter].QuestionString);
            Meteor.call("ClassRooms.nextQuestion",nextQuestionID,Session.get('currentRoomID'));
        }
    }
});