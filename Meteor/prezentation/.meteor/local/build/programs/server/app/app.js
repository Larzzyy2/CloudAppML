var require = meteorInstall({"imports":{"api":{"presentations.js":["meteor/mongo",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/presentations.js                                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({Presentations:function(){return Presentations}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
var Presentations = new Mongo.Collection('Presentations');           // 2
                                                                     //
//Presentations.Schema = new SimpleSchema({                          //
//   name: {type: String},                                           //
//   AccessCode: {type: Number},                                     //
//   Questions: {type: [Object]}                                     //
//});                                                                //
                                                                     //
//var Presentation= new SimpleSchema({                               //
//    name: {type: String},                                          //
//    AccessCode: {type: Number},                                    //
//    Questions: {type: [Object]}                                    //
//})                                                                 //
///////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/api/presentations.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/presentations.js');
                                                                     // 2
                                                                     //
Meteor.startup(function () {                                         // 4
  // code to run on server at startup                                //
});                                                                  // 6
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
