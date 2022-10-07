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

exports.updateQuantity = catchAsyncErrors(async (req, res, next) => {
  await Cart.findByIdAndUpdate({ _id: req.params.productId }, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });

  res.status(201).json({
    success: true,
  });
});

exports.removeCartItem = catchAsyncErrors(async (req, res, next) => {
  const cart = await Cart.findById(req.params.productId);

  if (!cart) {
    return next(new ErrorHandler("Cart not found with this id", 404));
  }

  await cart.remove();

  res.status(201).json({
    success: true,
  });
});
