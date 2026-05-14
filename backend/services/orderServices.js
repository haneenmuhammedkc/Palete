
import mongoose from "mongoose";
import Order from "../models/Order.js";
import Table from "../models/Table.js";
import Menu from "../models/menu.model.js";
import DiningSession from "../models/DiningSession.js";

import { ORDER_STATUS }from "../constants/orderStatus.js";



export const placeOrderService =
async (data) => {

   const session =
      await mongoose.startSession();

   session.startTransaction();

   try {

      const {
         tableId,
         items,
         notes,
      } = data;



      // =========================
      // VALIDATION
      // =========================

      if (!items || items.length === 0) {

         throw new Error(
            "Order items required"
         );
      }



      // =========================
      // FIND TABLE
      // =========================

      const table =
         await Table.findById(tableId);

      if (!table) {

         throw new Error(
            "Table not found"
         );
      }



      // =========================
      // FIND / CREATE SESSION
      // =========================

      let diningSession =
         await DiningSession.findOne({

            table: tableId,

            status: "ACTIVE",

         });


      if (!diningSession) {

         diningSession =
            await DiningSession.create(
            [{
               table: tableId,
            }],
            { session }
         );

         diningSession =
            diningSession[0];
      }



      // =========================
      // FETCH ALL MENU ITEMS
      // =========================

      const menuIds =
         items.map(

            item => item.menuItemId
         );


      const menuItems =
         await Menu.find({

            _id: { $in: menuIds }

         });



      // CONVERT TO MAP

      const menuMap = {};

      menuItems.forEach(item => {

         menuMap[item._id] = item;
      });



      // =========================
      // BUILD ORDER ITEMS
      // =========================

      let subtotal = 0;

      const orderItems = [];



      for (const item of items) {

         const menuItem =
            menuMap[item.menuItemId];



         if (!menuItem) {

            throw new Error(
               "Menu item not found"
            );
         }



         if (!menuItem.isAvailable) {

            throw new Error(
               `${menuItem.name} unavailable`
            );
         }



         const itemTotal =
            menuItem.price *
            item.quantity;



         subtotal += itemTotal;



         orderItems.push({

            menuItem: menuItem._id,

            quantity: item.quantity,

            price: menuItem.price,

            notes: item.notes || "",
         });
      }



      // =========================
      // TAX CALCULATION
      // =========================

      const tax =
         subtotal * 0.05;


      const total =
         subtotal + tax;



      // =========================
      // ESTIMATED READY TIME
      // =========================

      const estimatedReadyAt =
         new Date(
            Date.now() + 20 * 60000
         );



      // =========================
      // ORDER NUMBER
      // =========================

      const orderCount =
         await Order.countDocuments();


      const orderNumber =
         `ORD-${String(orderCount + 1)
         .padStart(5, "0")}`;



      // =========================
      // CREATE ORDER
      // =========================

      const order =
         await Order.create(
         [{
            orderNumber,

            table: tableId,

            diningSession:
               diningSession._id,

            items: orderItems,

            subtotal,

            tax,

            total,

            notes,

            estimatedReadyAt,

            status:
               ORDER_STATUS.PLACED,
         }],
         { session }
      );



      // =========================
      // UPDATE TABLE
      // =========================

      table.status = "OCCUPIED";

      table.currentSession =
         diningSession._id;

      await table.save({ session });



      // =========================
      // UPDATE SESSION TOTAL
      // =========================

      diningSession.totalAmount += total;

      await diningSession.save({
         session
      });



      // =========================
      // COMMIT TRANSACTION
      // =========================

      await session.commitTransaction();

      session.endSession();



      // =========================
      // POPULATE ORDER
      // =========================

      const populatedOrder =
         await Order.findById(
            order[0]._id
         )

         .populate("table")

         .populate("items.menuItem")

         .populate("diningSession");



      return populatedOrder;

   } catch (error) {

      await session.abortTransaction();

      session.endSession();

      throw error;
   }
};