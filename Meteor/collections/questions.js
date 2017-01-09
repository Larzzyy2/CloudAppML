Questions = new Mongo.Collection('questions');
//ID
//PresentationID
//Question
//TypeID


Meteor.methods({
    'Questions.new' (question, type, presID){
        
        var TypeID = null;
        var multiple = null;
        
        const Type = Types.findOne({name:type});
        
        //Insert Question
        var QuestionID = Questions.insert({
            QuestionString: question,
            Type : Type,
            PresentationID: presID
        });
        
        //If the question is multiple choice put 2 empty entries ina answeroptions collection
        if(type = "multipleChoice")
        {
            for(var i = 0; i<2; i++)
            {
                AnswerOptions.insert({
                    QuestionID: QuestionID,
                    AnswerOptionString: "Answer option goes here"
                });
            }
        }
    },
    'Questions.remove'(ID){
        Questions.remove(ID);
        AnswerOptions.remove({QuestionID:ID})
    },
    'Questions.update.name'(newName, questionID){
        Questions.update(questionID, {
            $set: { QuestionString: newName}
        });
    },
    'Questions.update.type'(QuestionID, type){
                Questions.update(QuestionID,{
            $set: {Type: type}
        });
    },
    'Questions.update.AnswerOptions' (optionId, value){
                AnswerOptions.update(optionId,{
                $set: {AnswerOptionString: value}
            });
    }
})

//Schema gives error with Type

/*QuestionSchema = new SimpleSchema({
QuestionString : {
        type: String
    },
    Type: {
        type: Object //DOESNT WORK
    },
    PresentationID: {
        type: String
    },
});
Questions.attachSchema(QuestionSchema);*/
