import "../api/demo.js"
Template.demo.helpers({    
demo: function (){
    return demo.find();
}
    
});