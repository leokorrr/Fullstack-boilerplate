const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const database = require('./config/database');
const dbConnection = require('./config/databaseConnection');
const insertData = require('./config/insert.data');
const schemaSample = require('./config/schema');




const app = express();


// Database connection
dbConnection(database);


// Routing + data sending
app.get('/api/samples', (req,res)=>{
  schemaSample.schemaModel.find({}, (err, data)=>{
    if(err) throw err;
    res.json(data);
  });
})


// Server creation
const port = 5000;

app.listen(port, ()=>{
    console.log('Server is running on ' + port);
});
