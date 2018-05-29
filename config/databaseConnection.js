const mongoose = require('mongoose');
const database = require('./database');


module.exports = ()=>{

    mongoose.connect(database.url);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('database connected');
    });
}