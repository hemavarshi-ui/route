import express from "express"
const userRoutes=express.Router();

//GET


//POST

userRoutes.post("/register",(req,res)=>{
    const {name}=req.body;
    res.status(200).json({data:`Wellcom"${name}`})
})

//PUT


//DELETE





export default userRoutes