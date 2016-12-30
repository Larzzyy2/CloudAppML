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
        Meteor.call('Questions.update.name', questionstring, this._id);

    },
        "click #ok"(){
         $('#myModal').modal('hide');
    }
});
Template.EditQuestion.events({
    "submit #updateQuestion"(e){
        e.preventDefault();
        const target = e.target;
        const Type = target.type.value;
        const TypeID = Types.findOne({
            name: Type
        })._id;
        const currentQuestionID = Session.get('currentQuestionID');
        
        //Updates the Question Type
        Meteor.call("Questions.update.type", currentQuestionID, TypeID);
        
        console.log(target);
        //Updates the AnswerOptions
         for(var i = 0; i< target.Option.length; i++){
            var value = target.Option[i].value;
            var optionId = target.Option[i].dataset.id;
            Meteor.call("Questions.update.AnswerOptions", optionId, value);
            }
        
    },
    /*"change .radiobutton"(){
        console.log("radiobutton changed");
        if($('#radioOpen').prop("checked", true))
            {
                $('#radioMultiple').prop("checked", false);
                console.log("if open is checked");
            }
        if($('#radioMultiple').prop("checked", true))
            {
                $('#radioOpen').prop("checked", false)
                console.log("mutliple checked");
            }
    },
    "click #addOption"(){
        var QuestionID = Session.get('currentQuestionID')
          AnswerOptions.insert({
                QuestionID: QuestionID,
                AnswerString: ""
            });*/
    "click #deleteOption"(){
        AnswerOptions.remove(this._id);
    }
});

Template.EditQuestion.onRendered(function(){
   /* 
     if(Session.equals('QuestionTypeSelected','MultipleChoice'))
         {
             $("#radioOpen").prop("checked",false);
             $("#radioMultiple").prop("checked",true);
         }
        else
            {
                $("#radioMultiple").prop("checked",false);
                $("#radioOpen").prop("checked",true);
            }*/
});

Template.EditQuestion.helpers({
    option(){
        var QuestionID = Session.get('currentQuestionID')
        return AnswerOptions.find({
            QuestionID: QuestionID
        });
    },
       MultipleChoiceSelected(){
        if($("#radioMultiple").checked){
                return true;
            }
        else
            {
                return false;
            }
    },

});

