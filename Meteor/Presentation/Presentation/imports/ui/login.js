import './login.html';
//Meteor.subscribe('googleDetails');
Template.user.helpers({
   
   profileURL: function() {
    var user = Meteor.user(); 
    if (user) {
      return user.services.google.picture; 
    } 
 },
    name: function(){
        var user = Meteor.user();
        if(user){
            return user.services.google.name;
        }
    },
    email: function(){
        var user = Meteor.user();
        if(user){
        return user.services.google.email;
        }
    },
    
});