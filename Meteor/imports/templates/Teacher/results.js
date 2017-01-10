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
    Answers(){
        var QA = [];
        var  AnswersB = null;
        QuestionDataTracker.depend();
        for(var i=0; i<QuestionData.length; i++)
        {
        QuestionDataTracker.depend();
        AnswersB = Answers.find({QuestionID: QuestionData[i]._id}).fetch();
            for(var j=0; j< AnswersB.length; j++)
                {
                    var obj =
                        {
                        AnswerString: AnswersB[j].AnswerString,
                        QuestionString : QuestionData[i].QuestionString
                        }
                    QA.push(obj);
                }
        }
        return QA;
    }
    
});

Template.Resultslayout.events({
    "click #ClassRoomFinished"(){
        var ID = Session.get('currentRoomID');
        Meteor.call("ClassRooms.remove", ID);
        FlowRouter.go('/teacher');
    }
})
