import { User } from "../models/userModels.js"
import  bcrypt from "bcrypt"
import { sendCookie } from "../utils/feture.js";
import ErrorHandler from "../middlewares/error.js"


export const login=async(req,res,next)=>{
try {
  const {email,password}=req.body

  const user =await User.findOne({email}).select("+password")
  if(!user)return next(new ErrorHandler("pls singup",404))

  const isMatch= await bcrypt.compare(password,user.password)
  if(!isMatch)return next(new ErrorHandler("password is invalid",404))

    sendCookie(user,res,"welcome user")

} catch (error) {
  return error
}
}

export const register =async(req,res,next)=>{
try {
  const {name,email,password}=req.body;
  let user = await User.findOne({email})
  if(user)return next(new ErrorHandler("pls login",404))

     const hashpass= await bcrypt.hash(password,10)
     user = await User.create({name,email,password:hashpass})
     sendCookie(user,res,"register success",201)

} catch (error) {
  return error
}

}

export const userData=(req,res)=>{
   res.json({
    "success":true,
    "user":req.user
   })
}

export const logout=(req,res)=>{
  res.cookie("token","",{
    expires:new Date(Date.now()),
    sameSite: process.env.NODE_ENV==="devlopment"?"lax":"none",
    secure: process.env.NODE_ENV==="devlopment"?"false":"true"
  }).json({
    "success":true
  })
}