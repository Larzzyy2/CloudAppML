import './teacher.html';

/*Meteor.subscribe('Questions',  Session.get('currentPresentationID'));*/
Meteor.subscribe('ClassRooms');
/*Meteor.subscribe('myPresentations');*/
RoomData = null;
counter = 0;
counterTracker = new Tracker.Dependency();
allQuestions = null;

Template.ShowPresentationTeacher.onCreated(function(){
    
    var RoomID = Session.get('currentRoomID');      
    RoomData = ClassRooms.findOne({_id : RoomID});
    
    var currentPresentationID = RoomData.PresentationID;
    allQuestions = Questions.find({
            PresentationID: currentPresentationID
        }).fetch();
});

Template.ShowPresentationTeacher.helpers({
    RoomData(){
        return RoomData;
    },
    currentQuestion(){
         return Questions.findOne({_id: RoomData.currentQuestionID}).QuestionString;
    },
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
    }
});