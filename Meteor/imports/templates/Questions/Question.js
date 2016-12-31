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
        return Questions.find({
            _id: ID
        });
    }
});

Template.Name.events({
    "submit #newQuestionName"(e){
        e.preventDefault();
        const target = e.target;
        const questionstring = target.string.value;
        Meteor.call('Questions.update.name', questionstring, this._id);

    },
        "click #ok"(){
         $('#myModal').modal('hide');
    }
});
Template.EditQuestion.events({
    "submit #updateQuestion"(e){
        //BUTTON SAVE IS PRESSED
        e.preventDefault();
        const target = e.target;
        const TypeValue = target.type.value;
        const Type = Types.findOne({
            name: TypeValue
        })._id;
        const currentQuestionID = Session.get('currentQuestionID');
        
        //Updates the Question Type
        Meteor.call("Questions.update.type", currentQuestionID, Type);
        
        
        //If the question is multiple choice
        
        if(Session.equals("currentQuestionType", "MultipleChoice"))
            {
                //Updates the AnswerOptions
                for(var i = 0; i< target.Option.length; i++){
                var value = target.Option[i].value;
                var optionId = target.Option[i].dataset.id;
                Meteor.call("Questions.update.AnswerOptions", optionId, value);
                }
            }
        FlowRouter.go("/presentations/"+Session.get("currentPresentationID"));
    },
    "change .radiobutton"(e){
       const currentTarget = e.currentTarget;
        var currentType = currentTarget.value;  
        Session.set('currentQuestionType', currentType);
    },
    "click #addOption"(){
        var QuestionID = Session.get('currentQuestionID');
        Meteor.call("AnswerOptions.add.empty" , QuestionID);
    },
    "click #deleteOption"(){
        Meteor.call("AnswerOptions.remove", this._id)
        
    }
});

Template.EditQuestion.onRendered(function(){
    //Checks the correct Type when the template is rendered.
    var currentType = Session.get('currentQuestionType');
    
    switch(currentType)
        {
            case "Open":
                $("#radioMultiple").prop('checked', false);
                $("#radioOpen").prop('checked', true);
                break;
            case "MultipleChoice":
                $("#radioOpen").prop('checked', false);
                $("#radioMultiple").prop('checked', true);
                break;
        }
});

Template.EditQuestion.helpers({
    option(){
        //returns all Answer Options attached to a question
        var QuestionID = Session.get('currentQuestionID')
        return AnswerOptions.find({
            QuestionID: QuestionID
        });
    },
    
    MultipleChoiceSelected(){
        switch(Session.get('currentQuestionType'))
            {
                case "MultipleChoice":
                    return true;
                    break;
                case "Open":
                    return false;
                    break;
            }
    },

});

