Types = new Mongo.Collection('types');
//ID
//Naam
//QuestionID

QuestionSchema = new SimpleSchema({
    name: {
        type: String
    },
    displayName: {
        type: String
    
    }
});
Types.attachSchema(QuestionSchema);