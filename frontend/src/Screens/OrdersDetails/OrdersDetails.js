import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import OrdersDetailsMarkup from './OrdersDetailsMarkup';
import {showMessage} from 'react-native-flash-message';
import {getOrderDetails} from '../../redux/actions/ordersAction';

const OrdersDetails = props => {
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

  return <OrdersDetailsMarkup {...props} loading={loading} order={order} />;
};

export default OrdersDetails;
