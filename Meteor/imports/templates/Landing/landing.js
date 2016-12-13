import './landing.html';

Template.landing.events({
    "click #student"(){
        FlowRouter.go('/');
    },
    "click #teacher"(){
        FlowRouter.go('/');
    },
});