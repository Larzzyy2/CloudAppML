import './results.html';
Meteor.subscribe('ClassRooms');
var ResultData = null;
var QuestionData =null;
var QuestionDataTracker = new Tracker.Dependency();

Template.Resultslayout.onRendered(function(){
var RoomID = Session.get('currentRoomID');
ResultData = ClassRooms.findOne({_id: RoomID});
var PresentationID = ResultData.PresentationID;
QuestionData = Questions.find({PresentationID: PresentationID}).fetch();
QuestionDataTracker.changed();
});

Template.Resultslayout.helpers({
    Questions(){
        console.log(QuestionData);
        QuestionDataTracker.depend();
        return QuestionData;
    }
});

/*Template.QuestionResult.helpers({
    QuestionString(){
        return 
    }
})*/