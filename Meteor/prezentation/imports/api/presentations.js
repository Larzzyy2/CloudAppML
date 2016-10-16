import { Mongo } from 'meteor/mongo';
export const Presentations = new Mongo.Collection('Presentations');

//Presentations.Schema = new SimpleSchema({
//   name: {type: String},
//   AccessCode: {type: Number},
//   Questions: {type: [Object]}
//});

//var Presentation= new SimpleSchema({
//    name: {type: String},
//    AccessCode: {type: Number},
//    Questions: {type: [Object]}
//})