import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getMyOrders} from '../../redux/actions/ordersAction';
import OrdersMarkup from './OrdersMarkup';
import {showMessage} from 'react-native-flash-message';

const Orders = props => {
  const {user} = useSelector(state => state.userRegister);
  const {orders, error} = useSelector(state => state.orders);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    dispatch(getMyOrders());
  }, [dispatch, error]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getMyOrders());
    setRefreshing(false);
  };

  return (
    <OrdersMarkup
      {...props}
      user={user}
      orders={orders}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default Orders;
