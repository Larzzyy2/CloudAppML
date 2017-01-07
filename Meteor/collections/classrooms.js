ClassRooms = new Mongo.Collection('classrooms');
//PresentationID
//CurrentQuestionID
//AccessCode

/*ClassRoomSchema = new SimpleSchema({
    PresentationID: {
        type: String
    },
    currentQuestionID: {
    },
    ¨
    Questions :{
        type: [String]
    },
    
    
    AccessCode: {
        type: Number
    }
    
    
});*/

/*ClassRooms.attachSchema(ClassRoomSchema);*/


Meteor.methods({
    "ClassRooms.new" (presID){
        var code =null;
        var Q = null;
        
        Q = Questions.find({
            PresentationID: presID
        }).fetch(); 
        console.log("First Question: " + Q[0].QuestionString);
        
        //Loop that prevents dupblicate accessCodes
        do {
            var x = Random.fraction()*100000
            code = parseInt(x,10);
        }
        while(ClassRooms.findOne({AccessCode: code})!==undefined)
        
        
               ClassRooms.insert({
            PresentationID: presID,
           //Sets the first question
            currentQuestionID: Q[0]._id,
            AccessCode: code
            });
    },
    "ClassRooms.nextQuestion"(qID, rID){        
        ClassRooms.update(rID ,{
            $set: {currentQuestionID: qID}
        });

    },
    "ClassRooms.remove"(ClassRoomID){
        Classrooms.remove({_id: ClassRoomID});
    },
    "ClassRooms.Answer"(ID, data, AnswerString){
        var questionid = ID;
        var answerstring = AnswerString;
        debugger;
        Answers.insert({
            AnswerString: answerstring
            , QuestionID: questionid
        });
        debugger;
    }
});