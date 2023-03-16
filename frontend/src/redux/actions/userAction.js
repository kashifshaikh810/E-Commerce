import axios from 'axios';
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  CLEAR_ERRORS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SUCCESS,
  SUCCESS_RESET,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  ADMIN_USERS_REQUEST,
  ADMIN_USERS_SUCCESS,
  ADMIN_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  LOGOUT_REQUEST,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  SHIPPING_DETAILS_REQUEST,
  SHIPPING_DETAILS_SUCCESS,
  SHIPPING_DETAILS_FAIL,
  GET_SHIPPING_DETAILS_REQUEST,
  GET_SHIPPING_DETAILS_SUCCESS,
  GET_SHIPPING_DETAILS_FAIL,
  UPDATE_SHIPPING_DETAILS_REQUEST,
  UPDATE_SHIPPING_DETAILS_SUCCESS,
  UPDATE_SHIPPING_DETAILS_FAIL,
} from '../constants/userConstants';

const URI = 'http://192.168.100.8:5000';

export const userRegister = userData => async dispatch => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const config = {headers: {'Content-Type': 'multipart/form-data'}};

    let requestURL = `${URI}/api/v1/register`;

    const {data} = await axios.post(requestURL, userData, {config});

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
    });

    dispatch({
      type: SUCCESS,
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const userLogin = (email, password) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {headers: {'Content-Type': 'application/json'}};

    let requestURL = `${process.env.HOST_URI}/api/v1/login`;

    const {data} = await axios.post(requestURL, {email, password}, {config});

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });

    dispatch({
      type: SUCCESS,
      payload: true,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

// clearing errors
export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export const successClear = () => dispatch => {
  dispatch({
    type: SUCCESS_RESET,
  });
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({
      type: LOAD_USER_REQUEST,
    });

    let requestURL = `${URI}/api/v1/me`;

    const {data} = await axios.get(requestURL);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const logOut = () => async dispatch => {
  try {
    dispatch({
      type: LOGOUT_REQUEST,
    });

    let requestURL = `${URI}/api/v1/logout`;

    await axios.get(requestURL);

    dispatch({type: LOGOUT_SUCCESS});
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const updateProfile = profileData => async dispatch => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });

    const config = {headers: {'Content-Type': 'multipart/form-data'}};

    let requestURL = `${URI}/api/v1/me/update`;

    const {data} = await axios.put(requestURL, profileData, {config});

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const updatePassword = passwordData => async dispatch => {
  try {
    dispatch({
      type: UPDATE_PASSWORD_REQUEST,
    });

    const config = {headers: {'Content-Type': 'multipart/form-data'}};

    let requestURL = `${URI}/api/v1/password/update`;

    const {data} = await axios.put(requestURL, passwordData, {config});

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const getAdminUsers = () => async dispatch => {
  try {
    dispatch({
      type: ADMIN_USERS_REQUEST,
    });

    let requestURL = `${URI}/api/v1/admin/users`;

    const {data} = await axios.get(requestURL);

    dispatch({
      type: ADMIN_USERS_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_USERS_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const adminDeleteUser = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });

    let requestURL = `${URI}/api/v1/admin/user/${id}`;

    const {data} = await axios.delete(requestURL);

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const getUserDetails = id => async dispatch => {
  try {
    dispatch({
      type: USER_DETAIL_REQUEST,
    });

    let requestURL = `${URI}/api/v1/admin/user/${id}`;

    const {data} = await axios.get(requestURL);

    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const updateUserDetails = (id, userData) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });

    const config = {headers: {'Content-Type': 'application/json'}};

    let requestURL = `${URI}/api/v1/admin/user/${id}`;

    const {data} = await axios.put(requestURL, userData, config);

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const postShippingDetails = shippingData => async dispatch => {
  try {
    dispatch({
      type: SHIPPING_DETAILS_REQUEST,
    });

    const config = {headers: {'Content-Type': 'application/json'}};

    let requestURL = `${URI}/api/v1/shippingDetails`;

    const {data} = await axios.post(requestURL, shippingData, config);

    dispatch({
      type: SHIPPING_DETAILS_SUCCESS,
      payload: data.shippingDetails,
    });
  } catch (error) {
    dispatch({
      type: SHIPPING_DETAILS_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const getShippingDetails = () => async dispatch => {
  try {
    dispatch({
      type: GET_SHIPPING_DETAILS_REQUEST,
    });

    let requestURL = `${URI}/api/v1/shippingDetails`;

    const {data} = await axios.get(requestURL);

    dispatch({
      type: GET_SHIPPING_DETAILS_SUCCESS,
      payload: data.shippingDetails,
    });
  } catch (error) {
    dispatch({
      type: GET_SHIPPING_DETAILS_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const updateShippingDetails = (shippingData, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_SHIPPING_DETAILS_REQUEST,
    });

    const config = {headers: {'Content-Type': 'application/json'}};

    let requestURL = `${URI}/api/v1/shippingDetails/${id}`;

    const {data} = await axios.put(requestURL, shippingData, config);

    dispatch({
      type: UPDATE_SHIPPING_DETAILS_SUCCESS,
      payload: data.shippingDetails,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SHIPPING_DETAILS_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};
