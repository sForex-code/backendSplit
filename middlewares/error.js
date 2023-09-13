class ErrorHandler extends Error{
    constructor(message,status){
        super(message,status)
        this.status=status
    }
}

export const errorMiddleware=(err,req,res,next)=>{
    err.message=err.message || "internal server error"
    err.status=err.status || 500
     return res.status(404).json({
        success:true,
        message:err.message
    
    })
    }

    export default ErrorHandler