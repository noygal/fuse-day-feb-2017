"use strict";
let mongoose = require('mongoose');
mongoose.connect('');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('connected to mongo!');
});



module.exports = {
     mongoose
};





