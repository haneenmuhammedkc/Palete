import dotenv from "dotenv" 
dotenv.config()
import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/category.routes.js";
import connectDB from "./config/db.js";



const app = express();

connectDB()
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/categories",categoryRoutes);


// Test Route
app.get("/", (req, res) => {
   res.send("API Running...");
});


export default app;