AnswerOptions = new Mongo.Collection('answeroptions');
//ID
//QuestionID
//AnswerString
/*
AnswerOptions.schema = new SimpleSchema({
    QuestionID: {type: String},
    AnswerString: {type: String, optional: true}
});

AnswerOptions.attachSchema(AnswerOptions.schema);*/

Meteor.methods({
    "AnswerOptions.add.empty" (QuestionID){
                
          AnswerOptions.insert({
                QuestionID: QuestionID,
                AnswerString: ""
            });
    },
    
    "AnswerOptions.remove"(ID){
        AnswerOptions.remove(ID);
    }
})