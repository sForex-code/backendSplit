import express, { urlencoded } from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/tasks.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"
//intialize server variable
 export const app =  express()

config({
    path:"./database/config.env"
})

//using middlewears
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FROTEND_URI],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true
}))
app.use(urlencoded({extended:false}))

//using routes
app.use("/users",userRouter)
app.use("/tasks",taskRouter)


app.use(errorMiddleware)

