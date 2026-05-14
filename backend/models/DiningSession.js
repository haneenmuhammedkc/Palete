
import mongoose from "mongoose";

const diningSessionSchema =
new mongoose.Schema(
{
   table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
   },

   status: {
      type: String,
      enum: [
         "ACTIVE",
         "COMPLETED",
      ],
      default: "ACTIVE",
   },

   totalAmount: {
      type: Number,
      default: 0,
   },

   startedAt: {
      type: Date,
      default: Date.now,
   },

   endedAt: Date,
},
{ timestamps: true }
);

export default mongoose.model(
   "DiningSession",
   diningSessionSchema
);