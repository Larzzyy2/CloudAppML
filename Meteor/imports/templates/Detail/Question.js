import './Question.html';
Meteor.subscribe('Questions');

Template.Name.helpers({
    question(){
        var ID = Session.get('currentQuestionID');
        var data = Questions.find({
            _id: ID
        });
        return data;
    },
});

Template.Name.events({
    "submit #newQuestionName"(e){
        e.preventDefault();
        const target = e.target;
        const questionstring = target.string.value;
        
        Questions.update(this._id, {
            $set: { QuestionString: questionstring}
        });
    }
});