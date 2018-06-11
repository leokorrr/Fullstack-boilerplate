const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const database = require('./config/db_config/database');
const dbConnection = require('./config/db_config/databaseConnection');
const insertData = require('./config/db_config/insert.data');
const schemaSample = require('./config/db_config/schema');


const app = express();



// Database connection
// dbConnection(database);


// Routing + data sending
// app.get('/api/samples', (req,res)=>{
//   schemaSample.schemaModel.find({}, (err, data)=>{
//     if(err) throw err;
//     res.json(data);
//   });
// })

app.get('/', (req,res)=>{
    res.send('Hello World');
})

// Server creation
const port = 5000;

var server = app.listen(port, ()=>{
    console.log('Server is running on ' + port);
});
