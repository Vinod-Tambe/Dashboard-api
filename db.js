const mongoose = require("mongoose"); 
const DBURL =
  "mongodb+srv://vinod:vinodt@cluster0.59rcshr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = async() => {
    const mongoose = require('mongoose');
    const dbHOST = process.env.DBHOST;
    
   const conn=await mongoose.connect(dbHOST)
        .then(() => {
            console.log('MongoDB Connnected...')
        }).catch((err) => {
            console.log('Error while Mongo Conn..', err);
        })
        return conn;
};



module.exports = { connectDb };
