var require = meteorInstall({"collections":{"presentations.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// collections/presentations.js                                                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Presentations = new Mongo.Collection('presentations');                                                            // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"accounts-config.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/accounts-config.js                                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
ServiceConfiguration.configurations.upsert({ service: "google" }, { $set: { clientId: "348721413933-uqg8uqcssqsqe3oho6876bcaj7htmhrn.apps.googleusercontent.com", secret: "JVT5a8jVc60RpAMEZ2C-B17T" } });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor","./accounts-config.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/main.js                                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('./accounts-config.js');
                                                                                                                  // 2
                                                                                                                  //
Meteor.startup(function () {});                                                                                   // 4
                                                                                                                  //
Meteor.publish('myPresentations', function () {                                                                   // 7
    var currentUserId = this.userId;                                                                              // 8
    return Presentations.find({ createdBy: currentUserId });                                                      // 9
});                                                                                                               // 10
                                                                                                                  //
Meteor.publish('googleDetails', function () {                                                                     // 12
    var user = Meteor.user();                                                                                     // 13
    return user;                                                                                                  // 14
});                                                                                                               // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./collections/presentations.js");
require("./server/accounts-config.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
