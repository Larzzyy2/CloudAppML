Presentations = new Mongo.Collection('presentations');
//ID
//userID
//AccessCode
//Date


PresentationSchema = new SimpleSchema({
    name : {
        type: String
    },
    createdBy: {
        type: String
    },
    dateCreated: {
        type: Date
    },
        AccessCode: {
        type: Number,
        min: 0,
        max: 100000
    },
});
Presentations.attachSchema(PresentationSchema);