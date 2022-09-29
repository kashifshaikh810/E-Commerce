import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {getOrderDetails} from '../../../redux/actions/ordersAction';
import AdminOrdersDetailsMarkup from './AdminOrdersDetailsMarkup';

const AdminOrdersDetails = props => {
  const {loading, order, error} = useSelector(state => state.orderDetails);
  const dispatch = useDispatch();
  let orderId = props?.route?.params?.id;

  useEffect(() => {
    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
    }

    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, error]);

  return (
    <AdminOrdersDetailsMarkup {...props} loading={loading} order={order} />
  );
};

export default AdminOrdersDetails;
