import  jwt  from "jsonwebtoken"

export const sendCookie=(user,res,message,status=200)=>{
    const jToken= jwt.sign({_id:user._id},process.env.JWT_TOKEN)

    res.status(status).cookie("token",jToken,{
     httpOnly:true,
     maxAge:15*60*1000,
     samesite: process.env.NODE_ENV === "devlopment"? "lax" : "none",
     secure: process.env.NODE_ENV === "devlopment" ? "false": "true"
    }).json({
     "success":true,
     message
    })
}