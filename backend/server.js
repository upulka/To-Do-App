const express = require("express");
const app = express();
const port = 8070;

/*
http://localhost:8070
*/
app.get("/" , (req , res) => {
    res.send("Hello World");
})

app.listen(port , ()=>{
    console.log("Server is running on port " + port);
})