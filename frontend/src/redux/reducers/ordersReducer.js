import {
  ALL_MY_ORDERS_FAIL,
  ALL_MY_ORDERS_REQUEST,
  ALL_MY_ORDERS_SUCCESS,
  CLEAR_ERRORS,
} from '../constants/ordersConstants';

export const myOrdersReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ALL_MY_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_MY_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case ALL_MY_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
