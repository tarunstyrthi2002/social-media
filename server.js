const express = require("express");
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

//Init middleware
app.use(express.json({extended:false}));

app.get("/",(req,res)=> res.send("Hello working"))  

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));


const PORT = process.env.PORT || 8000;

app.listen(PORT,(err)=>{
  if(err) console.log(err);
  console.log(`Server is up and running on ${PORT}`);
})