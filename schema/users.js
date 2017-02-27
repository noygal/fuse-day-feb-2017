"use strict";
let db = require('../mongodb_connect.js');
let Schema = db.mongoose.Schema;
let UsersSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    age: Number,
    gender: String,
    location: String,
    position: String,
    yearsExp: Number,
    platforms: Array,
    technologies: Array,
    gitHub: String,
    stackOverFlow: String,
    os: String,
    group: Array
});

// UsersSchema.methods.test = function () {
//     let greeting = this.name ? "Hello " + this.name : "User do not have a name";
//     console.log(greeting);
// };


let User = db.mongoose.model('User', UsersSchema);

module.exports = {
    User
};