const mongoose = require('mongoose');

const userModel = require('../models/UserSchema.js'); // Here we will get User collection

const getUsers = async (req, res) => {
    try {
        let users = await userModel.find(); // we are doing find on user collection like db.User.find()
        res.status(200).json(users);
    }catch(error){
        res.status(500).json(error);
    }
}

const addUsers = async (req, res) => {
    try{
        let users = await userModel.create(req.body);
        res.status(201).json({message: 'user added successfully', data: users});
    }catch(error){
        res.status(400).json(error);
    }
}

module.exports = {
    getUsers,
    addUsers
}