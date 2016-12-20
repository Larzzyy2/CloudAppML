import './teacher.html';

Meteor.subscribe('Questions',  Session.get('currentPresentationID'));

Meteor.subscribe('myPresentations');

var counter = 0;
var counterTracker = new Tracker.Dependency();
var presentationData = null;
var questionData = null;


Template.ShowPresentationTeacher.helpers({
    presentation(){
        var PresID = Session.get('currentPresentationID');
        presentationData = Presentations.find({
            PresentationID: PresID
        })
    return presentationData;
    },
    question(){
        var PresID = Session.get('currentPresentationID');
        //Gets all questions associated with presentation
        questionData = Questions.find({PresentationID: PresID}).fetch();
        counterTracker.depend();
        console.log("QuestionData: " + questionData[counter]);
        return questionData[counter];
        },
});

Template.ShowPresentationTeacher.events({
    "click #left"(){
        counter--;
        counterTracker.changed();
        console.log("QuestionData: " + questionData[counter]);
/*        var PresID = Session.get('currentPresentationID');
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: false}});
        counter--;
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: true}});*/
    },
    "click #right"(){
        counter++;
        counterTracker.changed();
        console.log("QuestionData: " + questionData[counter]);
      /*  var PresID = Session.get('currentPresentationID');
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: false}});
        counter++;
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: true}});
    */},
});