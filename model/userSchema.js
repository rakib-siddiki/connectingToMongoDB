const mongoose = require("mongoose");
const { Schema } = mongoose;

const userlist = Schema({
  fName: String,
  lName: String,
  email: {type:String,required:true},
  password:{type:String,required:true},
});

module.exports=mongoose.model("UserList",userlist)