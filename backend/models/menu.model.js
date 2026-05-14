import mongoose from "mongoose"

const ingredientSchema = new mongoose.Schema(
   {
      ingredientName: {
         type: String,
         required: true
      },

      quantity: {
         type: Number,
         required: true
      },

      unit: {
         type: String
      }
   },
   { _id: false }
);

const menuItemSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true
      },

      slug: {
         type: String,
         required: true,
         lowercase: true,
         trim: true,
         unique: true
      },

      description: {
         type: String,
         trim: true
      },

      category: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Category",
         required: true
      },

      image: {
         type: String
      },

      // gallery: [String],

      price: {
         type: Number,
         required: true,
         min: 0
      },

      ingredients: [ingredientSchema],

      preparationTime: {
         type: Number,
         default: 10
      },

      calories: {
         type: Number
      },

      spiceLevel: {
         type: String,
         enum: ["LOW", "MEDIUM", "HIGH"]
      },

      availability: {
         type: Boolean,
         default: true
      },

      isFeatured: {
         type: Boolean,
         default: false
      },

      rating: {
         type: Number,
         default: 0
      },

      totalOrders: {
         type: Number,
         default: 0
      }
   },
   {
      timestamps: true
   }
)

export default mongoose.model(
   "MenuItem",
   menuItemSchema
)