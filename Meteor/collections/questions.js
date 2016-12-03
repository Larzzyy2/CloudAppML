Questions = new Mongo.Collection('questions');
QuestionSchema = new SimpleSchema({
    QuestionString : {
        type: String
    },
    QuestionType: {
        type: String,
        allowedValues: ['Open', 'Multiple']
    },
    PresentationID: {
        type: String
    }
});
Questions.attachSchema(QuestionSchema);
