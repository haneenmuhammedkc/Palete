import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true,
         unique: true
      },

      slug: {
         type: String,
         required: true,
         lowercase: true,
         unique: true,
         trim: true
      },

      isActive: {
         type: Boolean,
         default: true
      },

      sortOrder: {
         type: Number,
         default: 0
      },
   },
   
   {
      timestamps: true
   },
   
);

export default mongoose.model(
   "Category",
   categorySchema
);