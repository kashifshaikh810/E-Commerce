import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_RESET,
  ADD_TO_CART_SUCCESS,
  CLEAR_ERRORS,
  GET_TO_CART,
  GET_TO_CART_FAIL,
  GET_TO_CART_REQUEST,
  GET_TO_CART_RESET,
  GET_TO_CART_SUCCESS,
  REMOVE_TO_CART,
  REMOVE_TO_CART_FAIL,
  REMOVE_TO_CART_REQUEST,
  REMOVE_TO_CART_RESET,
  REMOVE_TO_CART_SUCCESS,
  SAVE_SHIPPING_INFO,
} from '../constants/cartConstants';

export const cartReducer = (
  state = {cartItems: [], shippingInfo: {}},
  action,
) => {
  switch (action.type) {
    case REMOVE_TO_CART_REQUEST:
    case ADD_TO_CART_REQUEST:
    case GET_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems:
          state?.cartItems?.length === 0
            ? action.payload
            : [...state.cartItems, action.payload],
        success: action.payload,
      };
    case REMOVE_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case GET_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };
    case REMOVE_TO_CART_FAIL:
    case ADD_TO_CART_FAIL:
    case GET_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TO_CART_RESET:
      return {
        ...state,
        success: false,
      };
    case REMOVE_TO_CART_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };

    default:
      return state;
  }
};
