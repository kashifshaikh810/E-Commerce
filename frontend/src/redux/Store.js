import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

// reducers
import {productReducer, signInAndSignUp} from './reducers/productReducer';
import {userReducer} from './reducers/userReducer';

const reducer = combineReducers({
  products: productReducer,
  showLine: signInAndSignUp,
  userRegister: userReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
