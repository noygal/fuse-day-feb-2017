"use strict";
let db = require('../mongodb_connect.js');
let Schema = db.mongoose.Schema;
let TagsSchema = new Schema({
    urls: Array,
    tags: Array,
    rating: String,
    authorUserName: {type: Schema.Types.ObjectId, ref: 'User'}
});

// TagsSchema.methods.test = function () {
//     let greeting = this.name ? "Hello " + this.name : "User do not have a name";
//     console.log(greeting);
// };


let Tags = db.mongoose.model('Tags', TagsSchema);

module.exports = {
    Tags
};