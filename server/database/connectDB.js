const mongoose = require('mongoose');
const config = require("../config");

const connectDB = async () => {
    try
    {
        await mongoose.connect(`mongodb+srv://${config.mongoDBUsername}:${config.mongoDBPass}@cluster0.weuvs.mongodb.net/${config.dbName}?retryWrites=true&w=majority`)

        console.log("Connected to Database...")
    }
    catch(err)
    {
        console.log(err);
    }
    
}

module.exports = connectDB;