import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Orientation from '../../components/Layouts/Orientation/Orientation';
import CartMarkup from './CartMarkup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  addItemsToCart,
  clearCartErrors,
  getCart,
  getCartItem,
  removeToCart,
  updateQuantity,
} from '../../redux/actions/cartAction';
import {showMessage} from 'react-native-flash-message';

const Cart = props => {
  const [orientation, setOrientation] = useState(
    Orientation.isPortrait() ? 'portrait' : 'landscape',
  );
  const [quantity, setQuantity] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState({});

  const dispatch = useDispatch();
  const {loading, cartItems, error} = useSelector(state => state.cart);

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setOrientation(Orientation.isPortrait() ? 'portrait' : 'landscape');
    });

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearCartErrors());
    }

    getShippingInfoData();
    dispatch(getCartItem());
  }, [dispatch, AsyncStorage, error]);

  const getShippingInfoData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem('shippingInfo');
      const res = jsonValue != null ? JSON.parse(jsonValue) : {};
      if (res != null) {
        setData(res);
      }
    } catch (e) {
      console.log(e, 'err');
    }
  };

  const increaseQuantity = item => {
    let stock = item.stock;
    let quantity = item.quantity;
    let id = item._id;
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    console.log(item);
    dispatch(updateQuantity(id, newQty));
    dispatch(getCartItem());
  };

  const decreaseQuantity = item => {
    let quantity = item.quantity;
    let id = item._id;
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }

    dispatch(updateQuantity(id, newQty));
    dispatch(getCartItem());
  };

  const removeCartHandler = (id, i) => {
    setRefreshing(true);
    dispatch(removeToCart(id));
    showMessage({
      message: 'Success',
      description: 'Successfully Removed...',
      type: 'success',
    });
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const checkOutPressHandler = () => {
    props.navigation.navigate('ShippingDetails', {shippingData: data});
  };

  const onRefresh = () => {
    setRefreshing(true);
    getCartItemsData();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <CartMarkup
      {...props}
      orientation={orientation}
      quantity={quantity}
      setQuantity={setQuantity}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      removeCartHandler={removeCartHandler}
      onRefresh={onRefresh}
      refreshing={refreshing}
      checkOutPressHandler={checkOutPressHandler}
      cartItems={cartItems}
      // loading={loading ? loading : false}
    />
  );
};

export default Cart;
