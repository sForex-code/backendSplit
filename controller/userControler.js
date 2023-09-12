import { User } from "../models/userModels.js"


export const statingpage=(req,res)=>{
    res.send("<h1>nice working</h1>")
}

export const register =async(req,res)=>{
    const {name,email,password}=req.body
     await User.create({
        name,
        email,
        password,
    })
    res.status(201).json({
     success:true,
    meessage:"data saved"
    })
}
export const findbyparams=async(req,res)=>{
    const {id}=req.params
    const users=await User.findById(id)

    res.json({
        success:true,
        users,
    })
}

export const userData= async(req,res)=>{
    const users =await User.find({})
    res.json({
        success:true,
        users
    })
}