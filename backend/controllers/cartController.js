const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const Cart = require("../models/cartModel");

exports.newCartItem = catchAsyncErrors(async (req, res, next) => {
  const { product, name, price, image, stock, quantity } = req.body;

  const cartItem = await Cart.create({
    product,
    name,
    price,
    image,
    stock,
    quantity,
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    cartItem,
  });
});

exports.getUserCartItem = catchAsyncErrors(async (req, res, next) => {
  const cartItems = await Cart.find({ user: req.user._id });

  if (!cartItems) {
    next(new ErrorHandler("No Items In Your Cart", 400));
  }

  res.status(201).json({
    success: true,
    cartItems,
  });
});
