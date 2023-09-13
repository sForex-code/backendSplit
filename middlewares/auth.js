import { User } from "../models/userModels.js"
import jwt  from "jsonwebtoken";

export const isAuth=async(req,res,next)=>{
try {
  const {token}=req.cookies
  if(!token)
  return res.json({
    "success":"false",
    "message":"login first"
})
   const decode =jwt.verify(token,process.env.JWT_TOKEN)

   req.user=await User.findById(decode._id)
   next()
} catch (error) {
  return error
}
}