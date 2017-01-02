ClassRoom = new Mongo.Collection('classroom');
//PresentationID
//CurrentQuestionID
//AccessCode

ClassRoomSchema = new SimpleSchema({
    PresentationID: {
        type: String
    },
    currentQuestionID: {
        type: String
    },
    /*¨
    Questions :{
        type: [String]
    },
    */
    
    AccessCode: {
        type: Number
    }
    
    
});

ClassRoom.attachSchema(ClassRoomSchema);
