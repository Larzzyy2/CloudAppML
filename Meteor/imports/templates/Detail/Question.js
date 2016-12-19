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
    "submit #updateQuestion"(event){
        event.preventDefault();

        
        const target = event.target;
        var QuestionID = Session.get('currentQuestionID');
        var typename = null;
        var data = null;
        var typeID = null;
        console.log("type selected: " + target.type.value);
        
        switch(Session.get('QuestionTypeSelected'))
            {
                case 'MultipleChoice':
                    typename ="Multiple Choice";
                    break;
                case 'Open':
                    typename ="Open";
                    break;
            }
        
        console.log("new Question type is: " + typename);
        
        var data = Types.findOne({
            name: typename
        });
        
        var typeID = data._id;
        console.log("type ID : " + typeID);
        
        
        
        Questions.update(QuestionID,{
            $set: {TypeID: typeID}
        });
        
        //Update Answer Options
        console.log(event.target.Option);
        for(var i = 0; i< event.target.Option.length; i++){
            //GET values from input fields
            value = event.target.Option[i].value;
            optionId = event.target.Option[i].dataset.id;
            
            //Log to console
            console.log('option value:' + value);
            console.log('option ID: ' + optionId);
            
            //update
            AnswerOptions.update(optionId,{
                $set: {AnswerString: value}
            });
        }
        
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

Template.EditQuestion.onRendered(function(){
    
     if(Session.equals('QuestionTypeSelected','MultipleChoice'))
         {
             $("#radioMultiple").prop("checked",true);
         }
        else
            {
                $("#radioOpen").prop("checked",true);
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
    },
    OpenSelected(){
            if(Session.equals('QuestionTypeSelected','Open'))
            {
                return true;
            }
        else
            {
                return false;
            }
    },
});

