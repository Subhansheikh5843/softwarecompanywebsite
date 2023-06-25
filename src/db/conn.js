const mongoose = require("mongoose");

// .)create a database. 
mongoose.connect("mongodb://127.0.0.1:27017/subhandynamicc").then(()=>{
  console.log("connection successful")
}).catch((error)=>{
  console.log(error)
})