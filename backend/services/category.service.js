import Category from "../models/category.model.js";
import slugify from "slugify";


// add category
export const createCategory = async (data) => {

    const slug = slugify(data.name, {
      lower: true,
      strict: true,
      trim: true
    });

   const existingCategory = await Category.findOne({slug});
   if (existingCategory) {
      throw new Error("Category already exists");
   }
   const category = await Category.create({...data,slug});
   return category;
};

// fetch category
export const getCategories = async () => {
   return await Category.find({isActive: true}).sort({ createdAt: -1 });
};

// update category
export const updateCategory = async (categoryId,data) => {

   const category = await Category.findById(categoryId);
   if (!category) {
      throw new Error("Category not found");
   }
   Object.assign(category, data);
   await category.save();
   return category;
};

// disable category
export const disableCategory = async (categoryId,adminId) => {

   const category = await Category.findById(categoryId);
   if (!category) {
      throw new Error("Category not found");
   }
   category.isActive = false;
   category.disabledAt = new Date();
   category.disabledBy = adminId;
   await category.save();
   return category;
};


export const enableCategory = async (categoryId) => {

   const category = await Category.findById(categoryId);
   if (!category) {
      throw new Error("Category not found");
   }
   category.isActive = true;
   await category.save();

   return category;
};