import './teacher.html';

Meteor.subscribe('Questions',  Session.get('currentPresentationID'));

Meteor.subscribe('myPresentations');

var counter = 1;

Template.ShowPresentationTeacher.helpers({
    presentation(){
        var PresID = Session.get('currentPresentationID');
        var data = Presentations.find({
            PresentationID: PresID
        });
    return data;
    },
    question(){
        var PresID = Session.get('currentPresentationID');
        //Gets all questions associated with presentation
        var data = Questions.find({PresentationID: PresID});
        return data;
        },
    startPresentation(){
        Questions.update({PresentationID: PresID, index: 1},{$set:{show: true}});
    }
    
});


Template.ShowPresentationTeacher.events({
    "click #left"(){
        var PresID = Session.get('currentPresentationID');
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: false}});
        counter--;
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: true}});
    },
    "click #right"(){
        var PresID = Session.get('currentPresentationID');
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: false}});
        counter++;
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: true}});
    },
});