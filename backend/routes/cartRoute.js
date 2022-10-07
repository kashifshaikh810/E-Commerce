const express = require("express");
const {
  newCartItem,
  getUserCartItem,
  updateQuantity,
  removeCartItem,
} = require("../controllers/cartController");

const router = express.Router();

router.route("/new/cartItem").post(newCartItem);

router.route("/me/cartItem").get(getUserCartItem);

router.route("/update/cartItem/:productId").put(updateQuantity);

router.route("/remove/cartItem/:productId").delete(removeCartItem);

module.exports = router;
