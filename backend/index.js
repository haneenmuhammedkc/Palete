import dotenv from "dotenv" 
dotenv.config()

import express from 'express'
import connectDB from "./config/db.js"

connectDB()

const app=express()

const Port = process.env.PORT

app.listen(Port,()=>{
    console.log("Server is Connected")
})