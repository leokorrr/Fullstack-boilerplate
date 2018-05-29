const mongoose = require('mongoose');
const schemaSample = require('./schema');



module.exports = (name, surname, email, age) => {
    return schemaSample.schemaModel({
        name: name,
        surname: surname,
        email: email,
        age: age
    }).save((err)=>{
        if(err) throw err;
        console.log('item ' + name + ' saved');
    })
}


