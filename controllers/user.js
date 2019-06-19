'use strict'
const User = require('../models/user')

async function Create( req, res) {
    try {
        const params= req.body;
    if( !params.name|| !params.surname || !params.email ) return res.status(404).send({message:"Llena los campos"});

    const userFound = await User.findOne({name: params.name});

    if( userFound) return res.status(404).send({message:"Usuario usado"});

    let user =new User({
        name:params.name,
        surname:params.surname,
        email:params.email
    });

   const userSaved = await user.save();
   userSaved ? res.status(200).send({user:userSaved}) : res.status(404).send({message:"Usuario no creado"}); 
    } catch (error) {
        return res.status(400).send({message:"Error de servidor" + error.message});
    }
}
async function GetUsers( req, res) {
try {
    const users = await User.find().limit(100);
    users.length > 0 ? res.status(200).send({user:users}) : res.status(404).send({message:"Usuario no encontrado"});
} catch (error) {
  return   res.status(400).send({message:"Error de servidor"});
}
}

module.exports ={
    Create,
    GetUsers
}
