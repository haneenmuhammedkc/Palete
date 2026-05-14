import dotenv from "dotenv" 
dotenv.config()
import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/category.routes.js";
import connectDB from "./config/db.js";
import menuRoutes from "./routes/menu.routes.js";
import orderRouter from "./routes/orderRoutes.js";



const app = express();

connectDB()
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/categories",categoryRoutes);
app.use('/api/menu',menuRoutes)
app.use('/api/orders',orderRouter)


// Test Route
app.get("/", (req, res) => {
   res.send("API Running...");
});


export default app;