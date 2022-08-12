import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
  SHOW_LINE_SIGNUP,
  SHOW_LINE_LOGIN,
} from '../constants/productConstants';

const productsState = {
  products: [],
};

export const productReducer = (state = productsState, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };
    case ALL_PRODUCT_FAIL:
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

export const signInAndSignUp = (state = {show: false}, action) => {
  switch (action.type) {
    case SHOW_LINE_LOGIN:
      return {
        ...state,
        show: action.payload,
      };
    case SHOW_LINE_SIGNUP:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return state;
  }
};
