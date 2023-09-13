import mongoose from "mongoose"
import { User } from "./userModels.js"

const taskSchema=new mongoose.Schema({
    task:{
        type:String,
        unique:true,
        require:true
    },
    decription:{
        type:String,
        unique:true,
        require:true
    },
    isCompleted:{
        type:Boolean,
        default:false,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        require:true
    }
})

export const Task =mongoose.model("task",taskSchema)