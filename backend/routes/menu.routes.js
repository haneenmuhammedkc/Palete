import express from "express";

import {createMenuItem, updateMenuItem, disableMenuItem, enableMenuItem, getMenuItems, getMenuByCategory, getSingleMenuItem} from "../controllers/menu.controller.js";

const menuRoutes = express.Router();

menuRoutes.post("/", createMenuItem);
menuRoutes.patch("/:id", updateMenuItem);
menuRoutes.patch("/:id/disable", disableMenuItem);
menuRoutes.patch("/:id/enable", enableMenuItem);
menuRoutes.get("/", getMenuItems);
menuRoutes.get("/category/:categoryId", getMenuByCategory);
menuRoutes.get("/:id", getSingleMenuItem);

export default menuRoutes;