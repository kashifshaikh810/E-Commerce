import axios from 'axios';
import {
  ALL_MY_ORDERS_FAIL,
  ALL_MY_ORDERS_REQUEST,
  ALL_MY_ORDERS_SUCCESS,
  CLEAR_ERRORS,
} from '../constants/ordersConstants';

export const getMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({type: ALL_MY_ORDERS_REQUEST});

    let link = `http://192.168.100.18:5000/api/v1/orders/me`;

    const {data} = await axios.get(link);

    dispatch({type: ALL_MY_ORDERS_SUCCESS, payload: data.orders});
  } catch (error) {
    dispatch({
      type: ALL_MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
