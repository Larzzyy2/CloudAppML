Presentations = new Mongo.Collection('presentations');
Questions = new Mongo.Collection('questions');
Answers = new Mongo.Collection('answers')

PresentationSchema = new SimpleSchema({
    name : {
        type: String
    },
    createdBy: {
        type: String
    },
    AccessCode: {
        type: Number,
        min: 0,
        max: 1000
    },
    dateCreated: {
        type: Date
    }
});

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

AnswerSchema = new SimpleSchema({
    Answer: {
        type: String
    },
    QuestionID: {
        type: String
    }
});

Presentations.attachSchema(PresentationSchema);
Questions.attachSchema(QuestionSchema);
Answers.attachSchema(AnswerSchema);