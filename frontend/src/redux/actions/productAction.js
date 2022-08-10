import axios from 'axios';
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from '../constants/productConstants';

export const getProduct =
  (keyword = '', currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async dispatch => {
    try {
      dispatch({
        type: ALL_PRODUCT_REQUEST,
      });

      let link = `http://192.168.100.18:5000/api/v1/products`;

      if (
        keyword !== '' ||
        currentPage > 1 ||
        price > [0, 25000] ||
        ratings >= 1
      ) {
        link = `http://192.168.100.18:5000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      }

      if (category) {
        link = `http://192.168.100.18:5000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const {data} = await axios.get(link);

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error?.response?.data?.message || error?.message,
      });

      console.log(error.message);
    }
  };

// clearing errors
export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
