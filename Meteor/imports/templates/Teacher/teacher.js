import './teacher.html';
import '../style.css';

/*Meteor.subscribe('Questions',  Session.get('currentPresentationID'));*/
Meteor.subscribe('ClassRooms');
Meteor.subscribe('AnswerOptions');
/*Meteor.subscribe('myPresentations');*/
var RoomData = null;
var RoomID = null;
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
        if(counter==allQuestions.length-1){
            console.log('lastQuestion');
            Session.set('lastQuestion', true);
        }
        else
        {
        console.log("not last question");
         Session.set('lastQuestion', false);
        }
    
    
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
	},
    LastQuestion(){
        return Session.get('lastQuestion');
    }
});
Template.ShowPresentationTeacher.events({
    "click #left"(){
        if(counter!=0)
        {
            counter--;
            counterTracker.changed();
            var nextQuestionID = allQuestions[counter]._id;
            console.log("current question should be: " + allQuestions[counter].QuestionString);
            Meteor.call("ClassRooms.nextQuestion", nextQuestionID, Session.get('currentRoomID'));
            
        }
        
    },
    "click #right"(){
        if(counter!=allQuestions.length-1)
        {
            counter++;
            counterTracker.changed();
            var nextQuestionID = allQuestions[counter]._id;
            console.log("current question should be: " + allQuestions[counter].QuestionString);
            Meteor.call("ClassRooms.nextQuestion",nextQuestionID,Session.get('currentRoomID'));
        }
    },
    "click #finish"(){
        var code = ClassRooms.findOne({_id:RoomID })._id;
        console.log(code);
        Session.set('currentRoomID',code);
        FlowRouter.go('/results/'+code);
    }
});