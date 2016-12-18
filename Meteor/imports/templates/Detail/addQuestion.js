import './addQuestion.html';
Session.setDefault('newQuestion', false);
Meteor.subscribe('Types')
Meteor.subscribe('AnswerOptions',Session.get('currentQuestionID'));
Template.addQuestion.events({
        'click #cancel'(){
        Session.set('newQuestion', false);
    },
        "click #ok"(){
         $('#myModal').modal('hide');
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
        var multiple = null;
        switch(String(type)){
            case 'Open':
                     var data = Types.findOne({name:"Open"});
                    TypeID = data._id;
                    var multiple = false;
                    break;
            case 'MultipleChoice':
                     var data = Types.findOne({name:"Multiple Choice"});
                    TypeID = data._id;
                    var multiple = true;
                    break;
        }

        var QuestionID = Questions.insert({
            QuestionString: question,
            TypeID : TypeID,
            PresentationID: Session.get('currentPresentationID'),
            Show : true
        });
        
        //If the question is multiple choice put 2 empty entries in options collection
        if(multiple){
            for(var i = 0; i<2; i++)
                {
            AnswerOptions.insert({
                QuestionID: QuestionID,
                AnswerString: ""
            });
                }
        }
    //Clear input
    target.QuestionString.value = "";
    
    //Hide addquestion
    Session.set('newQuestion', false);
    }
});