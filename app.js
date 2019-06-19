'use strict'

// Libs

const express = require('express');

const bodyParser = require('body-parser');
const app = express(); 
 

// Vars

const API_MD = '/api';
 

// Routes
 const userRoutes =require('./routes/user');

// Body Parser config
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

app.use((req, res, next)=> {

 res.header('Access-Control-Allow-Origin', '*');

 res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Request-Method');

 res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');

 res.header('Allow', 'GET, POST, DELETE, PUT, OPTIONS');
 

 next();

});
// use routes
app.use(API_MD, userRoutes);
module.exports = app; 