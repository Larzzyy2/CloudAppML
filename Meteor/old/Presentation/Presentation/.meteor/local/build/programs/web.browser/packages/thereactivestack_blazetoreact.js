//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var HTML = Package.htmljs.HTML;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var BlazeToReact;

var require = meteorInstall({"node_modules":{"meteor":{"thereactivestack:blazetoreact":{"lib":{"BlazeToReact.jsx":["meteor/tmeasday:check-npm-versions","./BlazeToReact-server.jsx","./BlazeToReact-client.jsx",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// packages/thereactivestack_blazetoreact/lib/BlazeToReact.jsx                              //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
var checkNpmVersions;module.import('meteor/tmeasday:check-npm-versions',{"checkNpmVersions":function(v){checkNpmVersions=v}});
                                                                                            //
checkNpmVersions({                                                                          // 3
  react: '15.x'                                                                             // 4
}, 'thereactivestack:blazetoreact');                                                        // 3
                                                                                            //
if (Meteor.isServer) {                                                                      // 7
  BlazeToReact = require('./BlazeToReact-server.jsx')['default'];                           // 8
} else {                                                                                    // 9
  BlazeToReact = require('./BlazeToReact-client.jsx')['default'];                           // 10
}                                                                                           // 11
                                                                                            //
module.export("default",exports.default=(BlazeToReact));                                    // 13
//////////////////////////////////////////////////////////////////////////////////////////////

}],"BlazeToReact-client.jsx":["react","meteor/blaze",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// packages/thereactivestack_blazetoreact/lib/BlazeToReact-client.jsx                       //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
module.export({default:function(){return BlazeToReact}});var React;module.import('react',{"default":function(v){React=v}});var Blaze;module.import('meteor/blaze',{"Blaze":function(v){Blaze=v}});
                                                                                            // 2
                                                                                            //
function BlazeToReact(name, options) {                                                      // 4
  if (!options) {                                                                           // 5
    options = {};                                                                           // 6
  }                                                                                         // 7
                                                                                            //
  if (!options.container) {                                                                 // 9
    options.container = React.createElement('span', null);                                  // 10
  }                                                                                         // 11
                                                                                            //
  return React.createClass({                                                                // 13
    shouldComponentUpdate: function () {                                                    // 14
      function shouldComponentUpdate() {                                                    // 13
        // Blaze has the full control once started                                          // 15
        return false;                                                                       // 16
      }                                                                                     // 17
                                                                                            //
      return shouldComponentUpdate;                                                         // 13
    }(),                                                                                    // 13
    componentWillUnmount: function () {                                                     // 19
      function componentWillUnmount() {                                                     // 13
        Blaze.remove(this.blazeView);                                                       // 20
      }                                                                                     // 21
                                                                                            //
      return componentWillUnmount;                                                          // 13
    }(),                                                                                    // 13
    componentWillReceiveProps: function () {                                                // 23
      function componentWillReceiveProps(props) {                                           // 13
        this.blazeView.dataVar.set(props);                                                  // 24
      }                                                                                     // 25
                                                                                            //
      return componentWillReceiveProps;                                                     // 13
    }(),                                                                                    // 13
    render: function () {                                                                   // 27
      function render() {                                                                   // 13
        return React.cloneElement(options.container, {                                      // 28
          ref: function (el) {                                                              // 29
            if (el && !this.blazeView) {                                                    // 30
              this.blazeView = Blaze.renderWithData(global.Template[name], this.props, el);
            }                                                                               // 32
          }.bind(this)                                                                      // 33
        });                                                                                 // 28
      }                                                                                     // 35
                                                                                            //
      return render;                                                                        // 13
    }()                                                                                     // 13
  });                                                                                       // 13
};                                                                                          // 37
//////////////////////////////////////////////////////////////////////////////////////////////

}],"BlazeToReact-server.jsx":["react",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// packages/thereactivestack_blazetoreact/lib/BlazeToReact-server.jsx                       //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
module.export({default:function(){return BlazeToReact}});var React;module.import('react',{"default":function(v){React=v}});
                                                                                            //
// Blaze templates are not loaded server-side, we cannot do server-rendering                // 3
// We make sure the render is the same as on the client initially                           // 4
                                                                                            //
var DummyElement = React.createClass({                                                      // 6
  displayName: 'DummyElement',                                                              // 6
  render: function () {                                                                     // 7
    function render() {                                                                     // 6
      return React.createElement('span', null);                                             // 8
    }                                                                                       // 9
                                                                                            //
    return render;                                                                          // 6
  }()                                                                                       // 6
});                                                                                         // 6
                                                                                            //
function BlazeToReact(name, options) {                                                      // 12
  if (!options) {                                                                           // 13
    options = {};                                                                           // 14
  }                                                                                         // 15
                                                                                            //
  if (!options.container) {                                                                 // 17
    options.container = React.createElement('span', null);                                  // 18
  }                                                                                         // 19
                                                                                            //
  return React.createClass({                                                                // 21
    render: function () {                                                                   // 22
      function render() {                                                                   // 21
        return options.container;                                                           // 23
      }                                                                                     // 24
                                                                                            //
      return render;                                                                        // 21
    }()                                                                                     // 21
  });                                                                                       // 21
};                                                                                          // 26
//////////////////////////////////////////////////////////////////////////////////////////////

}]}}}}},{"extensions":[".js",".json",".jsx"]});
var exports = require("./node_modules/meteor/thereactivestack:blazetoreact/lib/BlazeToReact.jsx");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['thereactivestack:blazetoreact'] = exports, {
  BlazeToReact: BlazeToReact
});

})();
