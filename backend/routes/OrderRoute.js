const express = require("express");
// import adminController from "../controllers/admincontroller.js";
const orderController = require("../controllers/orderController.js");
const router = express.Router();
router.post("/addorder", orderController.SendOrders);
router.get("/orders", orderController.GetOrders);
router.delete("/orders/:id", orderController.DeleteOrder);

module.exports = router;
