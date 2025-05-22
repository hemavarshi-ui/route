import express from "express"
import dotenv from"dotenv" 
dotenv.config()
import cors from"cors" 
import connectDB from "./database/connectDB.js"
import userRoutes from "./routes/userRoutes.js"

const app= express()
app.use(express.json())
app.use(cors())
app.use("/api/user",userRoutes)
app.get("/",(req,res)=>{

res.status(200).json({Message:"Api change sucessfully"})

})
app.get("/api/hear-beat",(req,res)=>{
    req.status(200).json({data:"Heart beat was sucessfully"})
    
})

app.listen(process.env.PORT,()=> {
    console.log(`server running sucessfully  at port ${process.env.PORT}`)
})
connectDB();

