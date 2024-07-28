
const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://amamontford1:fkoDWHqGcnWpyt8j@cluster0.aa3abl8.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoose = require("mongoose")


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;