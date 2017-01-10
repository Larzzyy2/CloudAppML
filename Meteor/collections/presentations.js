Presentations = new Mongo.Collection('presentations');
//ID
//userID
//AccessCode
//Date

Meteor.methods({
    'Presentations.remove' (presID){
        //Removes Presentation
        Presentations.remove(presID);
   
        
        //Removes AnswerOptions Atttached to Questions attached to presentation     
        var Q = Questions.find({
            PresentationID : presID
        }).fetch();
        
        
        console.log(Q);
        
        for (var i = 0; i<Q.length;i++)
        {      
            AnswerOptions.remove({
                QuestionID : Q[i]._id
                });
        }
        
        //Removes Questions associated with presentation
        Questions.remove({
            PresentationID : presID
        });


        
    },
    'Presentations.add'(presentationName){        
    var readableDate = new Date().toLocaleDateString();  
        
    //Insert Presentation into collection
        Presentations.insert({
            name: presentationName,
            userID: this.userId,
            dateCreated: readableDate,
        });
    },
    'Presentations.update'(id, newPresentationName){
        Presentations.update(id, {
            $set: { name: newPresentationName}
        });
    }
});

PresentationSchema = new SimpleSchema({
    name : {
        type: String
    },
    userID: {
        type: String
    },
    dateCreated: {
        type: String
    }
});
Presentations.attachSchema(PresentationSchema);