import mongoose from "mongoose";

const diningSessionSchema = new mongoose.Schema(
   {
      table: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Table",
         required: true
      },

      sessionId: {
         type: String,
         required: true,
         unique: true
      },

      customerName: {
         type: String,
         trim: true
      },

      customerPhone: {
         type: String
      },

      startedAt: {
         type: Date,
         default: Date.now
      },

      endedAt: {
         type: Date
      },

      active: {
         type: Boolean,
         default: true
      },

      orders: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
         }
      ],

      totalAmount: {
         type: Number,
         default: 0
      }
   },
   {
      timestamps: true
   }
);

export default mongoose.model(
   "DiningSession",
   diningSessionSchema
);