const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var SampleSchema = new Schema({
    name: String,
    surname: String,
    email:{
        type: String,
        required: true,
        unique: true
    },
    age: Number
});

module.exports = {
    schemaModel: mongoose.model('Sample', SampleSchema)
}
