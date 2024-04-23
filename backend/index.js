const express = require('express')
const cors = require('cors')
const connectDB = require('./db/db.config.js');
const userRouter = require('./routes/user.routes.js');

const app = express();


//Defining the middelwires
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/user", userRouter);

app.get("/", (req, res)=>{
    res.send("This is our website Home Page");
})

connectDB()
app.listen(5000, ()=>console.log("Listening...\n--> Local :  http://localhost:5000"))