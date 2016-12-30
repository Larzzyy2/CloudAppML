Presentations = new Mongo.Collection('presentations');
//ID
//userID
//AccessCode
//Date

Meteor.methods({
    'Presentations.remove' (presID){
        Presentations.remove(presID);
    },
    'Presentations.add'(presentationName){

    var code = null;
    var date = null;
        
    //Loop that prevents dupblicate accessCodes
    do {
        var date = new Date();
        var x = Random.fraction()*100000
        var code = parseInt(x,10);
    }
    while(Presentations.findOne({AccessCode: code})!==undefined)
        
    var readableDate = date.toLocaleDateString();  
        
    //Insert Presentation into collection
        Presentations.insert({
            name: presentationName,
            createdBy: this.userId,
            dateCreated: readableDate,
            AccessCode: code
        });
    }
});

PresentationSchema = new SimpleSchema({
    name : {
        type: String
    },
    createdBy: {
        type: String
    },
    dateCreated: {
        type: String
    },
        AccessCode: {
        type: Number,
        min: 0,
        max: 100000
    },
});
Presentations.attachSchema(PresentationSchema);