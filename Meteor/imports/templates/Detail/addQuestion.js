import './addQuestion.html';
Session.setDefault('newQuestion', false);
Meteor.subscribe('Types')
Template.addQuestion.events({
        'click #cancel'(){
        Session.set('newQuestion', false);
    },
    'submit #newQuestion'(e){
        //TO DO GEEF ZE DE VRAGEN EEN VOLGORDE
        //EN MANIER OM BIJ TE HOUDEN WELKE VRAAG GETOOND WORDT OP HET BORD
        e.preventDefault();
        const target = e.target;
        const question = target.QuestionString.value;
        const type = target.type.value;

        var TypeID = null;
        console.log(type);

        switch(String(type)){
            case 'Open':
                     var data = Types.findOne({name:"Open"});
                    TypeID = data._id;
                    break;
            case 'MultipleChoice':
                     var data = Types.findOne({name:"Multiple Choice"});
                    TypeID = data._id;
                    break;
        }

        Questions.insert({
            QuestionString: question,
            TypeID : TypeID,
            PresentationID: Session.get('currentPresentationID')
        });
    //Clear input
    target.QuestionString.value = "";
    
    //Hide addquestion
    Session.set('newQuestion', false);
    }
});


                    


/*  'submit #newQuestion'(e){
        
    //Creates a new presentation 
    e.preventDefault();
    //Get value from form element
    const target = e.target;
    const name = target.name.value;
    var currentUserId = Meteor.userId();
        
   //Insert Presentation into collection
       /* Question.insert({
            name: name,
            createdBy: currentUserId,
            dateCreated: date,
            AccessCode: code
        });
    

    
    //Clear form
    target.name.value="";
        
    Session.set('newPresentation',false);
    }

});

Template.addPresentation.helpers({
    newPresentation: function(){
        return Session.get('newPresentation');
    }
});



Template.AddQuestion.events({
        "submit #AddQuestion"(e){
         e.preventDefault();
        //Get value from form element
        const target = e.target;
        const Question = target.QuestionString.value;
        var currentPresentationID = Session.get('currentPresentationID');
        var QuestionID;
            if(Session.get('MultipleChoice')){

                }
           else
                {
                    var data  = Types.findOne({name: "Open"});
                   QuestionID = data._id;
                }
            if(Session.get('MultipleChoice'))
                {
                    //To DO
                }
            else{
        Questions.insert({
            QuestionString: Question,
            TypeID: QuestionID,
            PresentationID: currentPresentationID
        });
            }
        
        target.QuestionString.value="";
            
    },
});

Template.QuestionTypes.events({
        "click #MultipleChoice" (){
        Session.set('Open', false);
        Session.set('MultipleChoice', true);
        
    },
    "click #Open"(){
        Session.set('MultipleChoice', false);
        Session.set('Open', true);
    },
});
Template.Answers.helpers({
        MultipleChoice(){
        return Session.get('MultipleChoice');
    },
        AnswerCounter(){
        return Session.get('AnswerCounter');
    },
})*/  