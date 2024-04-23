const mongoose = require('mongoose');

async  function connectDB() {
    const DB_URL = "mongodb+srv://sareengarnaik51:simran1234@blog-app.0pezqyz.mongodb.net";
    const DB = "appointmentPlus";
    try{
        await mongoose.connect(DB_URL+"/"+DB);
        console.log("MongoDB Connected...");
    }catch(error){
        console.log("DataBase Error : "+ error);
    }
}

module.exports = connectDB;