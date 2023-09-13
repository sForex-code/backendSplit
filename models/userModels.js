import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

export const User=mongoose.model("newUser",userSchema)