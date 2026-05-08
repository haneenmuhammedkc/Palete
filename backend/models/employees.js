import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
   {
      employeeId: {
         type: String,
         required: true,
         unique: true
      },

      name: {
         type: String,
         required: true,
         trim: true
      },

      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true
      },

      password: {
         type: String,
         required: true
      },

      phone: {
         type: String
      },

      avatar: {
         type: String
      },

      role: {
         type: String,
         enum: [
            "ADMIN",
            "WAITER",
            "CHEF",
            "MANAGER",
            "CASHIER"
         ],
         required: true
      },

      shift: {
         type: String
      },

      salary: {
         type: Number
      },

      attendanceStatus: {
         type: String,
         enum: [
            "PRESENT",
            "ABSENT",
            "ON_LEAVE"
         ],
         default: "PRESENT"
      },

      isActive: {
         type: Boolean,
         default: true
      },

      joinedAt: {
         type: Date,
         default: Date.now
      }
   },
   {
      timestamps: true
   }
);

export default mongoose.model(
   "Employee",
   employeeSchema
);