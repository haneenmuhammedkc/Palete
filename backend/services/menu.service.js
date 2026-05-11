import MenuItem from "../models/menu.model.js";
import Category from "../models/category.model.js"
import slugify from "slugify";


export const createMenuItem = async (data) => {

    const slug = slugify(data.name, {
      lower: true,
      strict: true,
      trim: true
   });

   const categoryExists = await Category.findById(data.category);

   if (!categoryExists || !categoryExists.isActive) {
      throw new Error("Category not found");
   }

   const existingMenu =  await MenuItem.findOne({slug});

   if (existingMenu) {
      throw new Error("Menu item already exists");
   }

   const menuItem = await MenuItem.create({...data,slug});
   return menuItem;
};

export const updateMenuItem = async (menuId,data) => {

   const menuItem = await MenuItem.findById(menuId);

   if (!menuItem) {
      throw new Error("Menu item not found");
   }

   if (data.category) {

      const categoryExists = await Category.findById(data.category);

      if (!categoryExists || !categoryExists.isActive) {
         throw new Error("Invalid category");
      }
   }

   Object.assign(menuItem, data);
   await menuItem.save();
   return menuItem;
};

export const disableMenuItem = async ( menuId) => {

   const menuItem = await MenuItem.findById(menuId);

   if (!menuItem) {
      throw new Error("Menu item not found");
   }

   menuItem.availability = false;
   await menuItem.save();
   return menuItem;
};

export const enableMenuItem = async (menuId) => {

   const menuItem = await MenuItem.findById(menuId);

   if (!menuItem) {
      throw new Error("Menu item not found");
   }

   menuItem.availability = true;
   await menuItem.save();
   return menuItem;
};

export const getMenuItems = async () => {

   return await MenuItem.find({ availability: true})
      .populate("category")
      .sort({ createdAt: -1 });
};

export const getMenuByCategory = async ( categoryId) => {

   return await MenuItem.find({category: categoryId, availability: true})
      .populate("category")
      .sort({ createdAt: -1 });
};

export const getSingleMenuItem = async (menuId) => {

   const menuItem = await MenuItem.findById(menuId).populate("category");
   if (!menuItem) {
      throw new Error("Menu item not found");
   }
   return menuItem;
};

