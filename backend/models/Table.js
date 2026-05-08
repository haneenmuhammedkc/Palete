import mongoose from "mongoose";

const tableSchema = new mongoose.Schema(
   {
      tableNumber: {
         type: Number,
         required: true,
         unique: true
      },

      qrCode: {
         type: String,
         required: true
      },

      capacity: {
         type: Number,
         default: 2
      },

      location: {
         type: String
      },

      status: {
         type: String,
         enum: [
            "AVAILABLE",
            "OCCUPIED",
            "RESERVED",
            "CLEANING"
         ],
         default: "AVAILABLE"
      },

      currentSession: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "DiningSession"
      },

      isActive: {
         type: Boolean,
         default: true
      }
   },
   {
      timestamps: true
   }
);

export default mongoose.model(
   "Table",
   tableSchema
);