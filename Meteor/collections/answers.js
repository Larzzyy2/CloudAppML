Answers = new Mongo.Collection('answers')
AnswerSchema = new SimpleSchema({
    Answer: {
        type: String
    },
    QuestionID: {
        type: String
    }
});
Answers.attachSchema(AnswerSchema);