import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AllOrdersMarkup from './AllOrdersMarkup';
import {showMessage} from 'react-native-flash-message';
import {clearErrors, getAdminOrders} from '../../../redux/actions/ordersAction';

const AllOrders = props => {
  const dispatch = useDispatch();
  const {loading, orders, error} = useSelector(state => state.adminOrders);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getAdminOrders());

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAdminOrders());
    setRefreshing(false);
  };

  return (
    <AllOrdersMarkup
      {...props}
      orders={orders}
      onRefresh={onRefresh}
      refreshing={refreshing}
      loading={loading}
    />
  );
};

export default AllOrders;
