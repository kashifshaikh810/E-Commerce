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
} from '../constants/userConstants';

export const userRegister = userData => async dispatch => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const config = {headers: {'Content-Type': 'multipart/form-data'}};

    let requestURL = 'http://192.168.100.18:5000/api/v1/register';

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
      payload: error.response.data.message,
    });
  }
};

export const userLogin = (email, password) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {headers: {'Content-Type': 'application/json'}};

    let requestURL = 'http://192.168.100.18:5000/api/v1/login';

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
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

// clearing errors
export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export const successClear = () => async dispatch => {
  dispatch({
    type: SUCCESS_RESET,
  });
};
