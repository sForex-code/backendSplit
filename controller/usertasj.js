import ErrorHandler from "../middlewares/error.js"
import { Task } from "../models/todoTask.js"


export const addTask=async(req,res,next)=>{
try {
    const {task,description}=req.body
    await Task.create({
        task,
        description,
        user:req.user
    })

    res.status(201).json({
        success:true,
        message:"task"
    })

} catch (error) {
    return error
}
}

export const allTask=async(req,res,next)=>{
try {
    const tasks= await Task.find()
    if(!tasks)return next(new ErrorHandler("inavlid id",200))

    res.json({
        success:true,
        tasks,
    })
} catch (error) {
    return error
}
}

export const updateTask =async(req,res,next)=>{
try {
    const update= await Task.findById(req.params.id)
    if(!update)return next(new ErrorHandler("inavlid id",200))

   update.isCompleted=!update.isCompleted
   await update.save()
   res.status(200).json({
    success:true,
    task:"updated"
   })
} catch (error) {
    return error
}
}
export const deleteTask =async(req,res,next)=>{
try {
    const update= await Task.findById(req.params.id)
    if(!update)return next(new ErrorHandler("inavlid id",200))
   await update.deleteOne()

   res.status(200).json({
    success:true,
    task:"deleted"
   })
} catch (error) {
    return error
}
}