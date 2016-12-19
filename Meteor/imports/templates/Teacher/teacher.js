import './teacher.html';

Meteor.subscribe('Questions',  Session.get('currentPresentationID'));

Meteor.subscribe('myPresentations');

var counter = 0;
var data = null;
Template.ShowPresentationTeacher.helpers({
    presentation(){
        var PresID = Session.get('currentPresentationID');
        var data = Presentations.find({
            PresentationID: PresID
        })
    return data;
    },
    question(){
        var PresID = Session.get('currentPresentationID');
        //Gets all questions associated with presentation
        data = Questions.find({PresentationID: PresID}).fetch();
        console.log(data[counter]);
        console.log(counter);
        return data[counter];
        },
});

Template.ShowPresentationTeacher.events({
    "click #left"(){
        counter--;
/*        var PresID = Session.get('currentPresentationID');
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: false}});
        counter--;
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: true}});*/
    },
    "click #right"(){
        counter++;
        console.log(counter);
        console.log(data[counter]);
      /*  var PresID = Session.get('currentPresentationID');
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: false}});
        counter++;
        Questions.update({PresentationID: PresID, index: counter},{$set:{show: true}});
    */},
});