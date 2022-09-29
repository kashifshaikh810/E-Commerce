import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {
  getAdminOrders,
  getOrderDetails,
  updateOrder,
} from '../../../redux/actions/ordersAction';
import AdminOrdersDetailsMarkup from './AdminOrdersDetailsMarkup';
import {UPDATE_ORDER_STATUS_RESET} from '../../../redux/constants/ordersConstants';

const AdminOrdersDetails = props => {
  const {loading, order, error} = useSelector(state => state.orderDetails);
  const dispatch = useDispatch();
  let orderId = props?.route?.params?.id;
  const [status, setStatus] = useState('');
  const {
    loading: updateLoading,
    isUpdated,
    error: updateError,
  } = useSelector(state => state.updateOrderStatus);

  useEffect(() => {
    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
    }

    if (updateError) {
      showMessage({
        message: 'Error',
        description: updateError,
        type: 'danger',
      });
    }

    if (isUpdated) {
      dispatch(getOrderDetails(orderId));
      dispatch(getAdminOrders());
      showMessage({
        message: 'Success',
        description: 'Order Status Updated Successfully',
        type: 'success',
      });
      dispatch({type: UPDATE_ORDER_STATUS_RESET});
      setStatus('');
      props.navigation.navigate('AllOrders', {success: isUpdated});
    }

    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, error, updateError, isUpdated]);

  const updateUserOrder = () => {
    if (status !== null) {
      const data = {
        status: status,
      };
      dispatch(updateOrder(orderId, data));
    } else {
      showMessage({
        message: 'Error',
        description: 'Please choose the category then process',
        type: 'danger',
      });
    }
  };

  return (
    <AdminOrdersDetailsMarkup
      {...props}
      loading={loading ? loading : updateLoading}
      order={order}
      updateUserOrder={updateUserOrder}
      status={status}
      setStatus={setStatus}
    />
  );
};

export default AdminOrdersDetails;
