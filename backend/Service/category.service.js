import Category from "./category.model.js";

export const createCategory = async (data) => {

   const existingCategory = await Category.findOne({
      slug: data.slug
   });

   if (existingCategory) {
      throw new Error("Category already exists");
   }

   const category = await Category.create(data);

   return category;
};

export const getCategories = async () => {

   return await Category.find({
      isActive: true
   }).sort({ createdAt: -1 });
};