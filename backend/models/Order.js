import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
   {
      menuItem: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "MenuItem",
         required: true
      },

      quantity: {
         type: Number,
         required: true,
         min: 1
      },

      price: {
         type: Number,
         required: true
      },

      notes: {
         type: String
      }
   },
   { _id: false }
);

const orderSchema = new mongoose.Schema(
   {
      orderNumber: {
         type: String,
         required: true,
         unique: true
      },

      table: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Table"
      },

      diningSession: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "DiningSession"
      },

      items: [orderItemSchema],

      subtotal: {
         type: Number,
         required: true
      },

      tax: {
         type: Number,
         default: 0
      },

      discount: {
         type: Number,
         default: 0
      },

      total: {
         type: Number,
         required: true
      },

      status: {
         type: String,
         enum: [
            "PLACED",
            "ACCEPTED",
            "PREPARING",
            "READY",
            "SERVED",
            "COMPLETED",
            "CANCELLED"
         ],
         default: "PLACED"
      },

      paymentStatus: {
         type: String,
         enum: [
            "PENDING",
            "PAID",
            "FAILED",
            "REFUNDED"
         ],
         default: "PENDING"
      },

      paymentMethod: {
         type: String,
         enum: [
            "CASH",
            "CARD",
            "UPI",
            "ONLINE"
         ]
      },

      assignedWaiter: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Employee"
      },

      assignedChef: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Employee"
      },

      estimatedReadyAt: {
         type: Date
      },

      notes: {
         type: String
      }
   },
   {
      timestamps: true
   }
);

export default mongoose.model(
   "Order",
   orderSchema
);