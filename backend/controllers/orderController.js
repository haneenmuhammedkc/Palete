import { placeOrderService } from "../services/orderServices.js";




export const placeOrder =async (req, res) => {
   try {
      const order = await placeOrderService(req.body);
      return res.status(201).json({ success: true, message:"Order placed successfully", order, });
   } catch (error) {
      return res.status(400).json({ success: false, message: error.message,
      });
   }
};