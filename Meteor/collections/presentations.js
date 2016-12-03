Presentations = new Mongo.Collection('presentations');
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
        max: 100000
    },
    dateCreated: {
        type: Date
    }
});
Presentations.attachSchema(PresentationSchema);