Types = new Mongo.Collection('types');

QuestionSchema = new SimpleSchema({
    name: {
        type: String
    },
    displayName: {
        type: String
    
    }
});
Types.attachSchema(QuestionSchema);