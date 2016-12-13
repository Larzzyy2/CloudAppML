import './teacher.html';

Meteor.subscribe('Questions',  Session.get('currentPresentationID'));

Meteor.subscribe('myPresentations');

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
        var data = Questions.find({PresentationID: PresID, Show: true});
        return data;
        }
    
});


