'user strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
 name: String,
 surname: String,
 email:String,
 iat: {type: Number, default: new Date().getTime() }

});

module.exports = mongoose.model('User', UserSchema);

