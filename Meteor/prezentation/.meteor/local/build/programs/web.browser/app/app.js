var require = meteorInstall({"imports":{"ui":{"body.html":["./template.body.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/body.html                                                                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.exports = require("./template.body.js");                                                            // 1
                                                                                                           // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.body.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/template.body.js                                                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.body.addContent((function() {                                                                     // 2
  var view = this;                                                                                         // 3
  return HTML.Raw('<div class="container">\n    <header>\n \n      <form class="new-presentation">\n        <input type="text" name="text" placeholder="Type to add new presentations">\n      </form>\n    </header>\n \n    </div>');
}));                                                                                                       // 5
Meteor.startup(Template.body.renderToDocument);                                                            // 6
                                                                                                           // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"body.js":["../api/presentations.js","meteor/templating","./body.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/ui/body.js                                                                                      //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var Presentations;module.import('../api/presentations.js',{"Presentations":function(v){Presentations=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});module.import('./body.html');
                                                                                                           // 2
                                                                                                           //
                                                                                                           // 4
                                                                                                           //
Template.body.helpers({                                                                                    // 6
  presentations: function () {                                                                             // 7
    function presentations() {                                                                             // 6
      return Presentations.find({});                                                                       // 8
    }                                                                                                      // 9
                                                                                                           //
    return presentations;                                                                                  // 6
  }()                                                                                                      // 6
});                                                                                                        // 6
                                                                                                           //
Template.body.events({                                                                                     // 12
  'submit .new-presentation': function () {                                                                // 13
    function submitNewPresentation(event) {                                                                // 12
      // Prevent default browser form submit                                                               //
      event.preventDefault();                                                                              // 15
                                                                                                           //
      // Get value from form element                                                                       //
      var target = event.target;                                                                           // 18
      var text = target.text.value;                                                                        // 19
                                                                                                           //
      // Insert a task into the collection                                                                 //
      Presentations.insert({                                                                               // 22
        text: text,                                                                                        // 23
        createdAt: new Date() });                                                                          // 24
                                                                                                           //
      // Clear form                                                                                        //
      // current time                                                                                      //
      target.text.value = '';                                                                              // 28
    }                                                                                                      // 29
                                                                                                           //
    return submitNewPresentation;                                                                          // 12
  }()                                                                                                      // 12
});                                                                                                        // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"api":{"presentations.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// imports/api/presentations.js                                                                            //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.export({Presentations:function(){return Presentations}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
var Presentations = new Mongo.Collection('Presentations');                                                 // 2
                                                                                                           //
//Presentations.Schema = new SimpleSchema({                                                                //
//   name: {type: String},                                                                                 //
//   AccessCode: {type: Number},                                                                           //
//   Questions: {type: [Object]}                                                                           //
//});                                                                                                      //
                                                                                                           //
//var Presentation= new SimpleSchema({                                                                     //
//    name: {type: String},                                                                                //
//    AccessCode: {type: Number},                                                                          //
//    Questions: {type: [Object]}                                                                          //
//})                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"main.html":["./template.main.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/main.html                                                                                        //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
module.exports = require("./template.main.js");                                                            // 1
                                                                                                           // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/template.main.js                                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.body.addContent((function() {                                                                     // 2
  var view = this;                                                                                         // 3
  return HTML.DIV({                                                                                        // 4
    class: "container"                                                                                     // 5
  }, HTML.Raw("\n        <h1>Presentations</h1>\n        "), HTML.UL("\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("presentations"));                                                   // 7
  }, function() {                                                                                          // 8
    return [ "\n        ", Spacebars.include(view.lookupTemplate("presentation")), "\n        " ];         // 9
  }), "\n        "), "\n    ");                                                                            // 10
}));                                                                                                       // 11
Meteor.startup(Template.body.renderToDocument);                                                            // 12
                                                                                                           // 13
Template.__checkName("presentation");                                                                      // 14
Template["presentation"] = new Template("Template.presentation", (function() {                             // 15
  var view = this;                                                                                         // 16
  return HTML.LI(Blaze.View("lookup:text", function() {                                                    // 17
    return Spacebars.mustache(view.lookup("text"));                                                        // 18
  }));                                                                                                     // 19
}));                                                                                                       // 20
                                                                                                           // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","./main.html","../imports/ui/body.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// client/main.js                                                                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});module.import('./main.html');module.import('../imports/ui/body.js');
                                                                                                           //
                                                                                                           // 4
                                                                                                           //
                                                                                                           // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");