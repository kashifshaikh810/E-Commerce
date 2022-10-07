const express = require("express");
const {
  newCartItem,
  getUserCartItem,
  updateQuantity,
  removeCartItem,
} = require("../controllers/cartController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/new/cartItem").post(isAuthenticatedUser, newCartItem);

router.route("/me/cartItem").get(isAuthenticatedUser, getUserCartItem);

router.route("/update/cartItem/:productId").put(updateQuantity);

router.route("/remove/cartItem/:productId").delete(removeCartItem);

module.exports = router;
