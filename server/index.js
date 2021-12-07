const express = require("express")
const connectDB = require("./database/connectDB")
const app = express();

connectDB();

app.get("/", (req, res) => {
    res.send("Hi")
})

app.listen(8000, () => {
    console.log("Server started listening on port 8000");
})

