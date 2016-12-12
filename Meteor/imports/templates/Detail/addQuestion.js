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
            PresentationID: Session.get('currentPresentationID'),
            Show : false
        });
    //Clear input
    target.QuestionString.value = "";
    
    //Hide addquestion
    Session.set('newQuestion', false);
    }
});