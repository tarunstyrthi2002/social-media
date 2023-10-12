const express = require("express");
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB().catch(console.dir);

app.get("/",(req,res)=> res.send("Hello working"))  

const PORT = process.env.PORT || 8000;

app.listen(PORT,(err)=>{
  if(err) console.log(err);
  console.log(`Server is up and running on ${PORT}`);
})