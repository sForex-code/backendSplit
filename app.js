import express, { urlencoded } from "express";
import router from "./routes/users.js";
import {config} from "dotenv"

//intialize server variable
 export const app =  express()

config({
    path:"./database/config.env"
})

//using middlewears
app.use(express.json())
app.use(router)
app.use(urlencoded({extended:false}))




