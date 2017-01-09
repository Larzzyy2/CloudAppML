AnswerOptions = new Mongo.Collection('answeroptions');
Meteor.methods({
    "AnswerOptions.add.empty" (QuestionID){
          AnswerOptions.insert({
                QuestionID: QuestionID,
                AnswerOptionString: ""
            });
    },
    "AnswerOptions.remove"(ID){
        AnswerOptions.remove(ID);
    }
});
AnswerOptions.schema = new SimpleSchema({
    QuestionID: {type: String},
    AnswerOptionString: {type: String}
});
AnswerOptions.attachSchema(AnswerOptions.schema);
