import * as menuService from "../services/menu.service.js";

export const createMenuItem = async ( req, res) => {

   try {
      const menuItem = await menuService.createMenuItem(
            req.body
         );
      res.status(201).json({success: true,data: menuItem });
   } catch (error) {
      res.status(400).json({success: false, message: error.message});
   }
};

export const updateMenuItem = async (req,res) => {
   try {
      const menuItem = await menuService.updateMenuItem( req.params.id, req.body);
      res.status(200).json({success: true,data: menuItem });
   } catch (error) {
      res.status(400).json({ success: false, message: error.message
      });
   }
};

export const disableMenuItem = async ( req, res) => {

   try {
      const menuItem = await menuService.disableMenuItem( req.params.id );
      res.status(200).json({success: true, message: "Menu item disabled", data: menuItem });
   } catch (error) {
      res.status(400).json({ success: false, message: error.message});
   }
};

export const enableMenuItem = async ( req, res) => {

   try {
      const menuItem = await menuService.enableMenuItem(req.params.id);
      res.status(200).json({ success: true, message: "Menu item enabled", data: menuItem});

   } catch (error) {
      res.status(400).json({success: false, message: error.message});
   }
};

export const getMenuItems = async ( req,res) => {
   try {
      const menuItems = await menuService.getMenuItems();
      res.status(200).json({ success: true, data: menuItems});
   } catch (error) {
      res.status(500).json({success: false, message: error.message});
   }
};

export const getMenuByCategory = async (req,res) => {
   try {
      const menuItems = await menuService.getMenuByCategory( req.params.categoryId);
      res.status(200).json({ success: true, data: menuItems});
   } catch (error) {
      res.status(500).json({ success: false, message: error.message});
   }
};

export const getSingleMenuItem = async ( req,res) => {
   try {
      const menuItem = await menuService.getSingleMenuItem( req.params.id );
      res.status(200).json({success: true, data: menuItem});
   } catch (error) {
      res.status(404).json({ success: false, message: error.message});
   }
};