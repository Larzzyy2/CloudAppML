import './detail.html';
Session.setDefault('AnswerCounter',1);
Session.setDefault('Open',false);
Session.setDefault('MultipleChoice',true);
                           
Template.Info.helpers({
        presentation(){
        //Gets all presentations associated with user
        var ID = Session.get('currentPresentationID');
        var data = Presentations.find({_id: ID});
        return data;
    },
})

Template.DetailLayout.events({
   "click #back" (){
    FlowRouter.go('/');
   },
});

Template.Answers.events({
    "click #AddAnswer"(){
        Session.set('AnswerCounter',2)
    },

});

Template.Question.events({
        "click #AddQuestion"(){
        //TO Do push question to collection
    },
})

Template.QuestionTypes.events({
        "click #MultipleChoice" (){
        Session.set('Open', false);
        Session.set('MultipleChoice', true);
        
    },
    "click #Open"(){
        Session.set('MultipleChoice', false);
        Session.set('Open', true);
        //var ID = Session.get('currentPresentationID');
        //FlowRouter.go('/presentations/'+ID+'/open');
    },
});
Template.Answers.helpers({
        MultipleChoice(){
        return Session.get('MultipleChoice');
    },
        AnswerCounter(){
        return Session.get('AnswerCounter');
    },
})