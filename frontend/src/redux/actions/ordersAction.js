import axios from 'axios';
import {
  ALL_MY_ORDERS_FAIL,
  ALL_MY_ORDERS_REQUEST,
  ALL_MY_ORDERS_SUCCESS,
  CLEAR_ERRORS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from '../constants/ordersConstants';

export const getMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({type: ALL_MY_ORDERS_REQUEST});

    let link = `http://192.168.100.4:5000/api/v1/orders/me`;

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

export const getOrderDetails = id => async (dispatch, getState) => {
  try {
    dispatch({type: ORDER_DETAILS_REQUEST});

    let link = `http://192.168.100.4:5000/api/v1/order/${id}`;

    const {data} = await axios.get(link);

    dispatch({type: ORDER_DETAILS_SUCCESS, payload: data.order});
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
