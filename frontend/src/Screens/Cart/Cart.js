import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Orientation from '../../components/Layouts/Orientation/Orientation';
import CartMarkup from './CartMarkup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  addItemsToCart,
  getCart,
  removeToCart,
} from '../../redux/actions/cartAction';
import {showMessage} from 'react-native-flash-message';

const Cart = props => {
  const [orientation, setOrientation] = useState(
    Orientation.isPortrait() ? 'portrait' : 'landscape',
  );
  const [quantity, setQuantity] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setOrientation(Orientation.isPortrait() ? 'portrait' : 'landscape');
    });
    getCartItemsData();
  }, [AsyncStorage]);

  const getCartItemsData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem('cartItems');
      const res = jsonValue != null ? JSON.parse(jsonValue) : null;
      dispatch(getCart(res));
    } catch (e) {
      console.log(e, 'err');
    }
  };

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
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
      // cartItems={cartItems.length >= 1 ? cartItems : cartItemsStorage}
      cartItems={cartItems?.length === 0 ? [] : cartItems}
    />
  );
};

export default Cart;
