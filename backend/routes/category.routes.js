import express from "express";
import { createCategory, getCategories } from "../controllers/category.controller.js";


const categoryRoutes = express.Router();

// Create category
categoryRoutes.post("/", createCategory);

// Get all categories
categoryRoutes.get("/", getCategories);

router.patch("/:id", updateCategory);

router.patch("/:id/disable",disableCategory);

router.patch("/:id/enable",enableCategory);

export default categoryRoutes;