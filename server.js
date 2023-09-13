import { app } from "./app.js"
import { connectDB } from "./database/database.js"


connectDB()



app.listen(process.env.PORT,()=>{
    console.log(`server is working on ${process.env.PORT} port in ${process.env.NODE_ENV} mode `)
})
