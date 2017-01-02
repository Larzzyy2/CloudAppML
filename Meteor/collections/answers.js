Answers = new Mongo.Collection('answers')
//ID
//QuestionID
//Name

AnswerSchema = new SimpleSchema({
    AnswerString: {
        type: String
    },
    QuestionID: {
        type: String
    }
});
Answers.attachSchema(AnswerSchema);