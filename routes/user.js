'user strict'

const express =require('express');
const api = express.Router();
const controller =require('../controllers/user');

api.post('/user',controller.Create);
api.get('/user',controller.GetUsers);
module.exports = api;

