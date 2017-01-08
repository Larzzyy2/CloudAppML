import './addQuestion.html';
Session.setDefault('newQuestion', false);
Meteor.subscribe('Types')
Meteor.subscribe('AnswerOptions',Session.get('currentQuestionID'));

Template.addQuestion.events({
        'click #cancel'(){
        Session.set('newQuestion', false);
    },
        "click #ok"(){
         $('#myModal').modal('hide');
    },
    'submit #newQuestion'(e){
        e.preventDefault();
        const target = e.target;
        const question = target.QuestionString.value;
        const type = target.type.value;
        var presID = Session.get('currentPresentationID')
        Meteor.call('Questions.new', question, type, presID);
    //Clear input
    target.QuestionString.value = "";
    
    //Hide addquestion
    Session.set('newQuestion', false);
    },

});