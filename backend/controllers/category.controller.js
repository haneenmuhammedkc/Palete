import * as categoryService from '../services/category.service.js'



export const createCategory = async (req,res) => {
   try {
      const category = await categoryService.createCategory(req.body);
      res.status(201).json({ success: true, data: category});
   } catch (error) {
    res.status(400).json({ success: false, message: error.message});
   }
};

export const getCategories = async (req,res) => {
   try {
      const categories = await categoryService.getCategories();
      res.status(200).json({ success: true, data: categories });
   } catch (error) {
      res.status(500).json({ success: false, message: error.message });
   }
};

export const updateCategory = async (req,res) => {
   try {
      const category = await categoryService.updateCategory(req.params.id,req.body);
      res.status(200).json({success: true, data: category});
   } catch (error) {
      res.status(400).json({success: false,message: error.message});
   }
};

export const disableCategory = async (req,res) => {

   try {
      const category =await categoryService.disableCategory(req.params.id,req.user.id);
      res.status(200).json({success: true,message: "Category disabled",data: category});
   } catch (error) {
      res.status(400).json({ success: false, message: error.message});
   }
};


export const enableCategory = async (req, res) => {
   try {
      const category = await categoryService.enableCategory( req.params.id);

      res.status(200).json({ success: true, message: "Category enabled",data: category});

   } catch (error) {
      res.status(400).json({ success: false, message: error.message});
   }
};