var require = meteorInstall({"imports":{"ui":{"Templates":{"Dashboard":{"AddPresentation.html":["./template.AddPresentation.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/Dashboard/AddPresentation.html                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.exports = require("./template.AddPresentation.js");                                                         // 1
                                                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.AddPresentation.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/Dashboard/template.AddPresentation.js                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("addPresentation");                                                                           // 2
Template["addPresentation"] = new Template("Template.addPresentation", (function() {                               // 3
  var view = this;                                                                                                 // 4
  return Blaze.If(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("currentUser"));                                                             // 6
  }, function() {                                                                                                  // 7
    return [ "\n        ", HTML.FORM({                                                                             // 8
      id: "new-presentation"                                                                                       // 9
    }, "\n            ", HTML.INPUT({                                                                              // 10
      type: "text",                                                                                                // 11
      name: "name",                                                                                                // 12
      placeholder: "Add new Presentation"                                                                          // 13
    }), "\n        "), "\n    " ];                                                                                 // 14
  }, function() {                                                                                                  // 15
    return [ "\n    ", HTML.H3("Login in to start"), "\n    " ];                                                   // 16
  });                                                                                                              // 17
}));                                                                                                               // 18
                                                                                                                   // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Dasboard.html":["./template.Dasboard.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/Dashboard/Dasboard.html                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.exports = require("./template.Dasboard.js");                                                                // 1
                                                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.Dasboard.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/Dashboard/template.Dasboard.js                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("myPresentations");                                                                           // 2
Template["myPresentations"] = new Template("Template.myPresentations", (function() {                               // 3
  var view = this;                                                                                                 // 4
  return Blaze.If(function() {                                                                                     // 5
    return Spacebars.call(Spacebars.dot(view.lookup("presentations"), "count"));                                   // 6
  }, function() {                                                                                                  // 7
    return [ "\n    ", HTML.DIV({                                                                                  // 8
      class: "container"                                                                                           // 9
    }, "\n        ", HTML.DIV({                                                                                    // 10
      class: "row"                                                                                                 // 11
    }, "\n            ", HTML.DIV({                                                                                // 12
      class: "col-md-12"                                                                                           // 13
    }, "\n                ", HTML.DIV({                                                                            // 14
      class: "table-responsive"                                                                                    // 15
    }, "\n                    ", HTML.TABLE({                                                                      // 16
      id: "mytable",                                                                                               // 17
      class: "table table-bordred table-striped"                                                                   // 18
    }, "\n                        ", HTML.THEAD("\n                            ", HTML.TH("Name"), "\n                            ", HTML.TH("Date created"), "\n                            ", HTML.TH("Start"), "\n                            ", HTML.TH("Edit"), "\n                            ", HTML.TH("Delete"), "\n                        "), "\n                        ", HTML.TBODY(" \n                            ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("presentations"));                                                         // 20
    }, function() {                                                                                                // 21
      return [ "\n                            ", HTML.TR("\n                                ", HTML.TD(HTML.FORM({
        id: "new-name"                                                                                             // 23
      }, HTML.INPUT(HTML.Attrs({                                                                                   // 24
        type: "text",                                                                                              // 25
        value: function() {                                                                                        // 26
          return Spacebars.mustache(view.lookup("name"));                                                          // 27
        },                                                                                                         // 28
        id: "name",                                                                                                // 29
        name: "newName"                                                                                            // 30
      }, function() {                                                                                              // 31
        return Spacebars.attrMustache(view.lookup("toggleDisabled"));                                              // 32
      })), " ")), "\n                                ", HTML.TD(Blaze.View("lookup:dateCreated", function() {      // 33
        return Spacebars.mustache(view.lookup("dateCreated"));                                                     // 34
      })), "\n                                ", HTML.TD(HTML.P({                                                  // 35
        title: "Start"                                                                                             // 36
      }, HTML.BUTTON({                                                                                             // 37
        class: "btn btn-primary btn-xs",                                                                           // 38
        id: "start"                                                                                                // 39
      }, HTML.SPAN({                                                                                               // 40
        class: "glyphicon glyphicon-play-circle"                                                                   // 41
      })))), "\n                                ", HTML.TD(HTML.P({                                                // 42
        title: "Edit"                                                                                              // 43
      }, HTML.BUTTON({                                                                                             // 44
        class: "btn btn-primary btn-xs",                                                                           // 45
        id: "edit"                                                                                                 // 46
      }, HTML.SPAN({                                                                                               // 47
        class: "glyphicon glyphicon-pencil"                                                                        // 48
      })))), "\n                                ", HTML.TD(HTML.P({                                                // 49
        title: "Delete"                                                                                            // 50
      }, HTML.BUTTON({                                                                                             // 51
        class: "btn btn-danger btn-xs",                                                                            // 52
        id: "delete"                                                                                               // 53
      }, HTML.SPAN({                                                                                               // 54
        class: "glyphicon glyphicon-trash"                                                                         // 55
      })))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TH({
        scope: "row"                                                                                               // 57
      }, "*"), "\n                                ", HTML.TD({                                                     // 58
        class: "col-md-12"                                                                                         // 59
      }, HTML.FORM({                                                                                               // 60
        id: "new-question"                                                                                         // 61
      }, HTML.INPUT({                                                                                              // 62
        class: "col-md-12",                                                                                        // 63
        type: "text",                                                                                              // 64
        placeholder: "Geef uw vraag in",                                                                           // 65
        id: "question",                                                                                            // 66
        name: "newQuestion"                                                                                        // 67
      }), " ")), "\n                                ", HTML.TD(HTML.P({                                            // 68
        title: "Edit"                                                                                              // 69
      }, HTML.BUTTON({                                                                                             // 70
        class: "btn btn-primary btn-xs",                                                                           // 71
        id: "edit"                                                                                                 // 72
      }, HTML.SPAN({                                                                                               // 73
        class: "glyphicon glyphicon-pencil"                                                                        // 74
      })))), "\n                                ", HTML.TD(HTML.P({                                                // 75
        title: "Delete"                                                                                            // 76
      }, HTML.BUTTON({                                                                                             // 77
        class: "btn btn-danger btn-xs",                                                                            // 78
        id: "delete"                                                                                               // 79
      }, HTML.SPAN({                                                                                               // 80
        class: "glyphicon glyphicon-trash"                                                                         // 81
      })))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TH({
        scope: "row"                                                                                               // 83
      }, "-"), "\n                                ", HTML.TD(HTML.FORM({                                           // 84
        id: "new-name"                                                                                             // 85
      }, HTML.INPUT(HTML.Attrs({                                                                                   // 86
        type: "text",                                                                                              // 87
        value: function() {                                                                                        // 88
          return Spacebars.mustache(Spacebars.dot(view.lookup("Questions"), "question"));                          // 89
        },                                                                                                         // 90
        id: "question",                                                                                            // 91
        name: "newQuestion"                                                                                        // 92
      }, function() {                                                                                              // 93
        return Spacebars.attrMustache(view.lookup("toggleDisabled"));                                              // 94
      })), " ")), "\n                            "), " \n                            " ];                          // 95
    }), " \n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    "), " " ];
  }, function() {                                                                                                  // 97
    return [ "\n    ", HTML.P("No presentations exist. Create one to get started."), " " ];                        // 98
  });                                                                                                              // 99
}));                                                                                                               // 100
                                                                                                                   // 101
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AddPresentation.js":["./AddPresentation.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/Dashboard/AddPresentation.js                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.import('./AddPresentation.html');                                                                           // 1
                                                                                                                   //
//Event for adding a Presentation                                                                                  // 3
Template.addPresentation.events({                                                                                  // 4
    //Creates a new presentation                                                                                   // 5
    'submit #new-presentation': function () {                                                                      // 6
        function submitNewPresentation(e) {                                                                        // 4
                                                                                                                   //
            //prevent default browser form submit                                                                  // 8
            e.preventDefault();                                                                                    // 9
                                                                                                                   //
            //Get value from form element                                                                          // 11
            var target = e.target;                                                                                 // 12
            var name = target.name.value;                                                                          // 13
            var currentUserId = Meteor.userId();                                                                   // 14
            var date = new Date();                                                                                 // 15
            var readableDate = date.toLocaleDateString();                                                          // 16
                                                                                                                   //
            //Insert Presentation into collection                                                                  // 18
            Presentations.insert({                                                                                 // 19
                name: name,                                                                                        // 20
                createdBy: currentUserId,                                                                          // 21
                dateCreated: readableDate,                                                                         // 22
                AccessCode: 0,                                                                                     // 23
                Questions: Object()                                                                                // 24
                                                                                                                   //
            });                                                                                                    // 19
                                                                                                                   //
            //Clear form                                                                                           // 28
            e.target.name.value = "";                                                                              // 29
        }                                                                                                          // 31
                                                                                                                   //
        return submitNewPresentation;                                                                              // 4
    }()                                                                                                            // 4
});                                                                                                                // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Dashboard.js":["./Dasboard.html","meteor/session",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/Dashboard/Dashboard.js                                                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.import('./Dasboard.html');var Session;module.import('meteor/session',{"Session":function(v){Session=v}});   // 1
                                                                                                                   // 2
                                                                                                                   //
//Subscribe to presentations owned by the user                                                                     // 4
Meteor.subscribe('myPresentations');                                                                               // 5
                                                                                                                   //
//Helper for getting all Presentations                                                                             // 7
Template.myPresentations.helpers({                                                                                 // 8
    presentations: function () {                                                                                   // 9
        function presentations() {                                                                                 // 8
            //Gets all presentations associated with user                                                          // 10
            var currentUserId = Meteor.userId();                                                                   // 11
            var data = Presentations.find({ createdBy: currentUserId });                                           // 12
            return data;                                                                                           // 13
        }                                                                                                          // 14
                                                                                                                   //
        return presentations;                                                                                      // 8
    }()                                                                                                            // 8
});                                                                                                                // 8
Template.myPresentations.events({                                                                                  // 16
    'submit #new-name': function () {                                                                              // 17
        function submitNewName(e) {                                                                                // 16
            e.preventDefault();                                                                                    // 18
            //Get value from form element                                                                          // 19
            var target = e.target;                                                                                 // 20
            var name = target.newName.value;                                                                       // 21
            Presentations.update({ _id: this._id }, { $set: { name: name } });                                     // 22
        }                                                                                                          // 24
                                                                                                                   //
        return submitNewName;                                                                                      // 16
    }(),                                                                                                           // 16
    "click #delete": function () {                                                                                 // 26
        function clickDelete() {                                                                                   // 16
            //Removes the selected presentation from collection                                                    // 27
            Presentations.remove(this._id);                                                                        // 28
        }                                                                                                          // 30
                                                                                                                   //
        return clickDelete;                                                                                        // 16
    }(),                                                                                                           // 16
    "click #edit": function () {                                                                                   // 31
        function clickEdit() {}                                                                                    // 16
                                                                                                                   //
        return clickEdit;                                                                                          // 16
    }()                                                                                                            // 16
});                                                                                                                // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"User":{"User.html":["./template.User.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/User/User.html                                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.exports = require("./template.User.js");                                                                    // 1
                                                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.User.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/User/template.User.js                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("user");                                                                                      // 2
Template["user"] = new Template("Template.user", (function() {                                                     // 3
  var view = this;                                                                                                 // 4
  return Blaze.If(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("currentUser"));                                                             // 6
  }, function() {                                                                                                  // 7
    return [ "\n    ", HTML.P(HTML.IMG({                                                                           // 8
      src: function() {                                                                                            // 9
        return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "profileURL"));                        // 10
      },                                                                                                           // 11
      width: "100"                                                                                                 // 12
    })), "\n    ", HTML.P("Hello, ", Blaze.View("lookup:currentUser.name", function() {                            // 13
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "name"));                                // 14
    })), "\n    ", HTML.P("Your e-mail: ", Blaze.View("lookup:currentUser.email", function() {                     // 15
      return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "email"));                               // 16
    })), "\n    " ];                                                                                               // 17
  });                                                                                                              // 18
}));                                                                                                               // 19
                                                                                                                   // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"User.js":["./User.html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// imports/ui/Templates/User/User.js                                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.import('./User.html');                                                                                      // 1
Meteor.subscribe('googleDetails');                                                                                 // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},"client":{"template.detail.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.detail.js                                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("DetailLayout");                                                                              // 2
Template["DetailLayout"] = new Template("Template.DetailLayout", (function() {                                     // 3
  var view = this;                                                                                                 // 4
  return [ HTML.HEAD("\n  ", HTML.TITLE("Presentation"), "\n"), "\n\n", HTML.BODY("\n    ", HTML.Raw("<h1>Welcome to Presentation!</h1>"), "\n    ", Blaze._TemplateWith(function() {
    return {                                                                                                       // 6
      template: Spacebars.call(view.lookup("presentation"))                                                        // 7
    };                                                                                                             // 8
  }, function() {                                                                                                  // 9
    return Spacebars.include(function() {                                                                          // 10
      return Spacebars.call(Template.__dynamic);                                                                   // 11
    });                                                                                                            // 12
  }), "\n") ];                                                                                                     // 13
}));                                                                                                               // 14
                                                                                                                   // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.html":["./template.main.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/main.html                                                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.exports = require("./template.main.js");                                                                    // 1
                                                                                                                   // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.main.js                                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("MainLayout");                                                                                // 2
Template["MainLayout"] = new Template("Template.MainLayout", (function() {                                         // 3
  var view = this;                                                                                                 // 4
  return [ HTML.HEAD("\n  ", HTML.TITLE("Presentation"), "\n"), "\n", HTML.BODY("\n    ", HTML.Raw("<h1>Welcome to Presentation!</h1>"), "\n    ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n    ", Blaze._TemplateWith(function() {
    return {                                                                                                       // 6
      template: Spacebars.call(view.lookup("user"))                                                                // 7
    };                                                                                                             // 8
  }, function() {                                                                                                  // 9
    return Spacebars.include(function() {                                                                          // 10
      return Spacebars.call(Template.__dynamic);                                                                   // 11
    });                                                                                                            // 12
  }), "\n    ", Blaze._TemplateWith(function() {                                                                   // 13
    return {                                                                                                       // 14
      template: Spacebars.call(view.lookup("dashboard"))                                                           // 15
    };                                                                                                             // 16
  }, function() {                                                                                                  // 17
    return Spacebars.include(function() {                                                                          // 18
      return Spacebars.call(Template.__dynamic);                                                                   // 19
    });                                                                                                            // 20
  }), "\n") ];                                                                                                     // 21
}));                                                                                                               // 22
                                                                                                                   // 23
Template.__checkName("user");                                                                                      // 24
Template["user"] = new Template("Template.user", (function() {                                                     // 25
  var view = this;                                                                                                 // 26
  return Blaze.If(function() {                                                                                     // 27
    return Spacebars.call(view.lookup("currentUser"));                                                             // 28
  }, function() {                                                                                                  // 29
    return [ "\n    ", Spacebars.include(view.lookupTemplate("user")), "\n    " ];                                 // 30
  }, function() {                                                                                                  // 31
    return [ "\n    ", HTML.P("Please log in to continue."), "\n    " ];                                           // 32
  });                                                                                                              // 33
}));                                                                                                               // 34
                                                                                                                   // 35
Template.__checkName("dashboard");                                                                                 // 36
Template["dashboard"] = new Template("Template.dashboard", (function() {                                           // 37
  var view = this;                                                                                                 // 38
  return Blaze.If(function() {                                                                                     // 39
    return Spacebars.call(view.lookup("currentUser"));                                                             // 40
  }, function() {                                                                                                  // 41
    return [ "\n    ", HTML.H2("Add a presentation"), "\n    ", Spacebars.include(view.lookupTemplate("addPresentation")), "\n    ", HTML.H2("My presentations"), "\n    ", Spacebars.include(view.lookupTemplate("myPresentations")), "\n    " ];
  }, function() {                                                                                                  // 43
    return [ "\n    ", HTML.P("Please log in to continue."), "\n    " ];                                           // 44
  });                                                                                                              // 45
}));                                                                                                               // 46
                                                                                                                   // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","./main.html","../imports/ui/Templates/User/user.js","../imports/ui/Templates/Dashboard/AddPresentation.js","../imports/ui/Templates/Dashboard/Dashboard.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/main.js                                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});module.import('./main.html');module.import('../imports/ui/Templates/User/user.js');module.import('../imports/ui/Templates/Dashboard/AddPresentation.js');module.import('../imports/ui/Templates/Dashboard/Dashboard.js');
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   // 4
                                                                                                                   // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"collections":{"presentations.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/presentations.js                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Presentations = new Mongo.Collection('presentations');                                                             // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.detail.js");
require("./client/template.main.js");
require("./collections/presentations.js");
require("./client/main.js");