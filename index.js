'use strict'

const mongoose = require('mongoose'); 
const app = require('./app');
const PORT = process.env.PORT || 3977;

mongoose.Promise = global.Promise; 

mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true}, (err) => {
    err ? console.log('Server error') : app.listen(PORT,() => console.log('API listening on ' + PORT));
} );