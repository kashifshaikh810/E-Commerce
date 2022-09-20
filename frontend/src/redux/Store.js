import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// reducers
import {
  getCountriesReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
} from './reducers/productReducer';
import {profileReducer, userReducer} from './reducers/userReducer';
import {cartReducer} from './reducers/cartReducer';
import {myOrdersReducer, orderDetailReducer} from './reducers/ordersReducer';

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
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
