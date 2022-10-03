import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// reducers
import {
  adminProductsReducer,
  allAdminReviewReducer,
  deleteProductReducer,
  getCountriesReducer,
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
} from './reducers/productReducer';
import {
  adminUsersReducer,
  deleteUserReducer,
  profileReducer,
  updateUserReducer,
  userDetailReducer,
  userReducer,
} from './reducers/userReducer';
import {cartReducer} from './reducers/cartReducer';
import {
  adminOrdersReducer,
  deleteOrderReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailReducer,
  updateOrderReducer,
} from './reducers/ordersReducer';

const reducer = combineReducers({
  products: productReducer,
  userRegister: userReducer,
  productDetails: productDetailsReducer,
  newReview: newReviewReducer,
  getCountries: getCountriesReducer,
  cart: cartReducer,
  profile: profileReducer,
  orders: myOrdersReducer,
  orderDetails: orderDetailReducer,
  newOrder: newOrderReducer,
  adminProducts: adminProductsReducer,
  newProduct: newProductReducer,
  deleteProduct: deleteProductReducer,
  adminOrders: adminOrdersReducer,
  adminUsers: adminUsersReducer,
  updateOrderStatus: updateOrderReducer,
  deleteUserOrder: deleteOrderReducer,
  deleteUser: deleteUserReducer,
  userDetails: userDetailReducer,
  updateUser: updateUserReducer,
  allAdminReviews: allAdminReviewReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
