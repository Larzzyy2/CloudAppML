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
        //To DO extra answer
    },

});

Template.Question.events({
        "submit #AddQuestion"(e){
         e.preventDefault();
        //Get value from form element
        //const target = e.target;
        //const Question = target.QuestionString.value;
        var currentPresentationID = Session.get('currentPresentationID');
            
        Questions.insert({
            QuestionString: "test",
            QuestionType: 'Open',
            PresentationID: currentPresentationID
        });
        
        //target.QuestionString.value="";
            
    },
});

Template.QuestionTypes.events({
        "click #MultipleChoice" (){
        Session.set('Open', false);
        Session.set('MultipleChoice', true);
        
    },
    "click #Open"(){
        Session.set('MultipleChoice', false);
        Session.set('Open', true);
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