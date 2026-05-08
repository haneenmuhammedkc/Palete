import express from "express";
import { createCategory, getCategories } from "../controllers/category.controller.js";


const categoryRoutes = express.Router();

// Create category
categoryRoutes.post("/", createCategory);

// Get all categories
categoryRoutes.get("/", getCategories);

export default categoryRoutes;