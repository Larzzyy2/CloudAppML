import './landing.html';

Template.landing.events({
    "click #student"(){
        FlowRouter.go('/student');
    },
    "click #teacher"(){
        FlowRouter.go('/teacher');
    },
});