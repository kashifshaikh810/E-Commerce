import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AllOrdersMarkup from './AllOrdersMarkup';
import {showMessage} from 'react-native-flash-message';
import {
  clearErrors,
  deleteOrder,
  getAdminOrders,
  getMyOrders,
} from '../../../redux/actions/ordersAction';
import {DELETE_ORDER_RESET} from '../../../redux/constants/ordersConstants';

const AllOrders = props => {
  const dispatch = useDispatch();
  let paramFromAdminOrdersDetails = props?.route?.params?.success;
  const {loading, orders, error} = useSelector(state => state.adminOrders);
  const [refreshing, setRefreshing] = useState(false);
  const {
    loading: deleteLoading,
    isDeleted,
    error: deleteError,
  } = useSelector(state => state.deleteUserOrder);

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

    if (deleteError) {
      showMessage({
        message: 'Error',
        description: deleteError,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (isDeleted) {
      dispatch(getAdminOrders());
      showMessage({
        message: 'Success',
        description: 'Order Deleted Successfully',
        type: 'success',
      });
      dispatch({type: DELETE_ORDER_RESET});
      dispatch(getMyOrders());
    }
  }, [dispatch, error, isDeleted, deleteError]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAdminOrders());
    setRefreshing(false);
  };

  const deleteOrderOnPressHandler = orderId => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <AllOrdersMarkup
      {...props}
      orders={orders}
      onRefresh={onRefresh}
      refreshing={refreshing}
      loading={
        paramFromAdminOrdersDetails
          ? false
          : loading || paramFromAdminOrdersDetails
          ? false
          : deleteLoading
      }
      deleteOrderOnPressHandler={deleteOrderOnPressHandler}
    />
  );
};

export default AllOrders;
