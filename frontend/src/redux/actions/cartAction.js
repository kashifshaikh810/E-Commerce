import {
  ADD_TO_CART,
  GET_TO_CART,
  REMOVE_TO_CART,
  SAVE_SHIPPING_INFO,
} from '../constants/cartConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getCart = data => async (dispatch, getState) => {
  dispatch({
    type: GET_TO_CART,
    payload: data,
  });
};

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    let link = `http://192.168.100.4:5000/api/v1/products/${id}`;

    const {data} = await axios.get(link);

    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.Stock,
        quantity,
      },
    });

    AsyncStorage?.setItem(
      'cartItems',
      JSON.stringify(getState()?.cart?.cartItems),
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const removeToCart = id => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: id,
  });

  AsyncStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = data => async (dispatch, getState) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  AsyncStorage.setItem('shippingInfo', JSON.stringify(data));
};
