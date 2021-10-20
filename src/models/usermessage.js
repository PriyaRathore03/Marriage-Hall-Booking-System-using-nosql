const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:2
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id")
            }
        }

    },
    halls:{
        type:String,
        required:true
    },
    guests:{
        type:Number,
        required:true,
        max:950
    },
   event:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    
    date1:{
        type:String,
        required:true
    }

})

//we need a collection
const User = mongoose.model("User", userSchema);

module.exports = User;