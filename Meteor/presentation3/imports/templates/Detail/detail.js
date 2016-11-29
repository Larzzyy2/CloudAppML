import './detail.html';

Template.detailPresentation.helpers({
    presentation(){
        //Gets all presentations associated with user
        var ID = Session.get('currentPresentationID');
        var data = Presentations.find({_id: ID});
        return data;
    },
});

Template.detailPresentation.events({
   "click #back" (){
    FlowRouter.go('/');
   },
    "click #MultipleChoice" (){
        var ID = Session.get('currentPresentationID');
        FlowRouter.go('/presentations/'+ID+'/multiplechoice');
    },
    "click #Open"(){
        var ID = Session.get('currentPresentationID');
        FlowRouter.go('/presentations/'+ID+'/open');
    }
});
