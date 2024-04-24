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

const getUserById = async (req, res) =>{
    try{
        const {id }= req.params;
        const user = await userModel.find({"_id": id});  // Here the id is coming from routes :id so don't change the variable name hwile destructuring
        if(user.length >0){
            res.status(200).json(user);
        } else {
            res.status(404).json({message: "Record not found. Check ID and try again."});
        }
    } catch (error) {
        if(error.name === "CastError"){
            res.status(400).json({"message": "Invalid Id"});
        } else {
            res.status(500).json(error);
        }
    }
}

const updateUser = async (req, res) => {
    try{
        const { id } = req.params;

        // Now i want to show the deatils in the inoput field for better user friendliness
        // const beforeUpdate = await userModel.find( { "_id" : id } ); 
        // res.status(200).json(beforeUpdate);
        
        // Now this one is updated
        const user = await userModel.findOneAndUpdate({"_id" : id}, req.body, {new: true});
        if(user){
            res.status(200).json({message : "Updated Successfully", data : user});// with new : true the mongoose will return the new updaterd da
        } else {
            res.status(404).json({"message": "Record not found"})
        }
    }catch (error) {
        if(error.name === "CastError"){
            res.status(400).json({"message": "Invalid Id"})
        } else {
            res.status(500).json(error);
        }
    }
}

module.exports = {
    getUsers,
    addUsers,
    updateUser,
    getUserById
}