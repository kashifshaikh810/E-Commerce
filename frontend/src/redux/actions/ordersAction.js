import axios from 'axios';
import {
  ADMIN_ORDERS_FAIL,
  ADMIN_ORDERS_REQUEST,
  ADMIN_ORDERS_SUCCESS,
  ALL_MY_ORDERS_FAIL,
  ALL_MY_ORDERS_REQUEST,
  ALL_MY_ORDERS_SUCCESS,
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from '../constants/ordersConstants';

const URI = 'http://192.168.100.8:5000';

export const getMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({type: ALL_MY_ORDERS_REQUEST});

    let link = `${URI}/api/v1/orders/me`;

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

    let link = `${URI}/api/v1/order/${id}`;

    const {data} = await axios.get(link);

    dispatch({type: ORDER_DETAILS_SUCCESS, payload: data.order});
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createNewOrder = orderData => async (dispatch, getState) => {
  try {
    dispatch({type: CREATE_ORDER_REQUEST});

    let link = `${URI}/api/v1/order/new`;

    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.post(link, orderData, config);

    dispatch({type: CREATE_ORDER_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAdminOrders = () => async (dispatch, getState) => {
  try {
    dispatch({type: ADMIN_ORDERS_REQUEST});

    let link = `${URI}/api/v1/admin/orders`;

    const {data} = await axios.get(link);

    dispatch({type: ADMIN_ORDERS_SUCCESS, payload: data.orders});
  } catch (error) {
    dispatch({
      type: ADMIN_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateOrder = (id, status) => async (dispatch, getState) => {
  try {
    dispatch({type: UPDATE_ORDER_STATUS_REQUEST});

    let link = `${URI}/api/v1/admin/order/${id}`;

    const config = {headers: {'Content-Type': 'application/json'}};

    const {data} = await axios.put(link, status, config);

    dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload: data.success});
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_STATUS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteOrder = id => async (dispatch, getState) => {
  try {
    dispatch({type: DELETE_ORDER_REQUEST});

    let link = `${URI}/api/v1/admin/order/${id}`;

    const {data} = await axios.delete(link);

    dispatch({type: DELETE_ORDER_SUCCESS, payload: data.success});
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};
