import express from "express";
import { createCategory, disableCategory, enableCategory, getCategories, updateCategory } from "../controllers/category.controller.js";

const categoryRoutes = express.Router();

categoryRoutes.post("/", createCategory);
categoryRoutes.get("/", getCategories);
categoryRoutes.patch("/:id", updateCategory);
categoryRoutes.patch("/:id/disable",disableCategory);
categoryRoutes.patch("/:id/enable",enableCategory);

export default categoryRoutes;