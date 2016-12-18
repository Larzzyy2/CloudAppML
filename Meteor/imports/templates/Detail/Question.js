import './Question.html';
Meteor.subscribe('Questions',Session.get('currentPresentationID'));
Meteor.subscribe('AnswerOptions');
Template.QuestionLayout.events({
    "click #back"(){
        FlowRouter.go('/presentations/'+Session.get('currentPresentationID'));
    }
})

Template.Name.helpers({
    question(){
        var ID = Session.get('currentQuestionID');
        var data = Questions.find({
            _id: ID
        });
        return data;
    },
});

Template.Name.events({
    "submit #newQuestionName"(e){
        e.preventDefault();
        const target = e.target;
        const questionstring = target.string.value;
        
        Questions.update(this._id, {
            $set: { QuestionString: questionstring}
        });
    },
        "click #ok"(){
         $('#myModal').modal('hide');
    }
});
Template.EditQuestion.events({
    "submit #updateQuestion"(e){
        e.preventDefault();
        const target = e.target;
        var options = target.Option;
        console.log(options);
        console.log(options.value);
    },
    "click #radioOpen"(){
        Session.set('QuestionTypeSelected', 'Open');
    },
    "click #radioMultiple"(){
        Session.set('QuestionTypeSelected', 'MultipleChoice');
    },
        "click #addOption"(){
        var QuestionID = Session.get('currentQuestionID')
          AnswerOptions.insert({
                QuestionID: QuestionID,
                AnswerString: ""
            });
    },
    "click #deleteOption"(){
        AnswerOptions.remove(this._id);
    }
});

Template.EditQuestion.helpers({
    option(){
        var QuestionID = Session.get('currentQuestionID')
        return AnswerOptions.find({
            QuestionID: QuestionID
        });
    },
       MultipleChoiceSelected(){
        if(Session.equals('QuestionTypeSelected','MultipleChoice'))
            {
                return true;
            }
        else
            {
                return false;
            }
    }
});

