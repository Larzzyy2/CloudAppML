import './Overview.html';
import './addQuestion.js'

Meteor.subscribe('Types');
Meteor.subscribe('Questions', Session.get('currentPresentationID'));
Session.setDefault('newQuestion',false);

Template.DetailLayout.events({
   "click #back" (){
    FlowRouter.go('/teacher');
    Session.set('newQuestion', false);
   },
    'click #createQuestion'(){
        Session.set('newQuestion', true);
        //Code to insert empty data
   },
});

Template.DetailLayout.helpers({
    newQuestion(){
        return Session.get('newQuestion');
    },
})                   
Template.Info.helpers({
        presentation(){
        //Gets all presentations associated with user
        var ID = Session.get('currentPresentationID');
        var data = Presentations.find({_id: ID});
        return data;
    },
});
Template.Info.events({
    "submit #newPresentationName"(e){
        e.preventDefault();
        const target = e.target;
        const presentationString = target.name.value;
        var ID = Session.get('currentPresentationID');
        
        Meteor.call('Presentations.update', ID, presentationString);
    },
    "click #ok"(){
         $('#myModal').modal('hide');
    }
})

Template.QuestionOverview.helpers({
    Questions(){
        return Questions.find({PresentationID: Session.get('currentPresentationID')});
    },
    Type(){
        console.log(this.toString());
        return this.Type.displayName;
    }
});

Template.QuestionOverview.events({
    "click #edit"(){
        var presID = Session.get('currentPresentationID');
        FlowRouter.go('/presentations/'+presID+'/question/'+this._id);
    },
    "click #delete"(){
        Meteor.call("Questions.remove", this._id);
    },
});

