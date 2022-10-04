import axios from 'axios';
import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  ALL_COUNTRIES_REQUEST,
  ALL_COUNTRIES_SUCCESS,
  ALL_COUNTRIES_FAIL,
  ALL_STATES_REQUEST,
  ALL_STATES_SUCCESS,
  ALL_STATES_FAIL,
  ADMIN_PRODUCTS_REQUEST,
  ADMIN_PRODUCTS_SUCCESS,
  ADMIN_PRODUCTS_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_RESET,
  ALL_REVIEWS_REQUEST,
  ALL_REVIEWS_SUCCESS,
  ALL_REVIEWS_FAIL,
  CLEAR_REVIEWS,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
} from '../constants/productConstants';

export const getAllProducts =
  (keyword = '', currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async dispatch => {
    try {
      dispatch({
        type: ALL_PRODUCT_REQUEST,
      });

      let link = `http://192.168.100.4:5000/api/v1/products`;

      if (
        keyword !== '' ||
        currentPage > 1 ||
        price > [0, 25000] ||
        ratings >= 1
      ) {
        link = `http://192.168.100.4:5000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      }

      if (category) {
        link = `http://192.168.100.4:5000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
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
    }
  };

// clearing errors
export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export const productDetails = productID => async dispatch => {
  try {
    dispatch({type: PRODUCT_DETAILS_REQUEST});

    let link = `http://192.168.100.4:5000/api/v1/products/${productID}`;

    const {data} = await axios.get(link);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error?.response?.data?.message || error?.message,
    });
  }
};

export const newReview = review => async dispatch => {
  try {
    dispatch({
      type: NEW_REVIEW_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let link = `http://192.168.100.4:5000/api/v1/review`;

    const {data} = await axios.put(link, review, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllCountries = () => async dispatch => {
  try {
    dispatch({
      type: ALL_COUNTRIES_REQUEST,
    });

    let link = `http://192.168.100.4:5000/api/v1/countries`;

    const {data} = await axios.get(link);

    dispatch({
      type: ALL_COUNTRIES_SUCCESS,
      payload: data.countries,
    });
  } catch (error) {
    dispatch({
      type: ALL_COUNTRIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllStates = country => async dispatch => {
  try {
    dispatch({
      type: ALL_STATES_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let link = `http://192.168.100.4:5000/api/v1/states`;

    const {data} = await axios.post(link, {country: country}, config);

    dispatch({
      type: ALL_STATES_SUCCESS,
      payload: data.states,
    });
  } catch (error) {
    dispatch({
      type: ALL_STATES_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAdminProducts = () => async dispatch => {
  try {
    dispatch({
      type: ADMIN_PRODUCTS_REQUEST,
    });

    let link = `http://192.168.100.4:5000/api/v1/admin/products`;

    const {data} = await axios.get(link);

    dispatch({
      type: ADMIN_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADMIN_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createProduct = newProductData => async dispatch => {
  try {
    dispatch({
      type: NEW_PRODUCT_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let link = `http://192.168.100.4:5000/api/v1/admin/product/new`;

    const {data} = await axios.post(link, newProductData, config);

    dispatch({
      type: NEW_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteProduct = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_PRODUCT_REQUEST,
    });

    let link = `http://192.168.100.4:5000/api/v1/admin/products/${id}`;

    const {data} = await axios.delete(link);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const updateProduct = (id, productData) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_PRODUCT_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let link = `http://192.168.100.4:5000/api/v1/admin/products/${id}`;

    const {data} = await axios.put(link, productData, config);

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllReviews = id => async dispatch => {
  try {
    dispatch({type: ALL_REVIEWS_REQUEST});

    let link = `http://192.168.100.4:5000/api/v1/admin/reviews?id=${id}`;

    const {data} = await axios.get(link);

    dispatch({
      type: ALL_REVIEWS_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEWS_FAIL,
      payload: error?.response?.data?.message || error?.message,
    });
  }
};

export const deleteUserReview = (id, productId) => async dispatch => {
  try {
    dispatch({type: DELETE_REVIEW_REQUEST});

    let link = `http://192.168.100.4:5000/api/v1/admin/reviews?id=${id}&productId=${productId}`;

    const {data} = await axios.delete(link);

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error?.response?.data?.message || error?.message,
    });
  }
};
