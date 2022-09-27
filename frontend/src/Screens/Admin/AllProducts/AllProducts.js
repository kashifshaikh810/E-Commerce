import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  getAdminProducts,
} from '../../../redux/actions/productAction';
import AllProductsMarkup from './AllProductsMarkup';
import {showMessage} from 'react-native-flash-message';

const AllProducts = props => {
  const dispatch = useDispatch();
  const {loading, products, error} = useSelector(state => state.adminProducts);
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

    dispatch(getAdminProducts());
  }, [dispatch, error]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAdminProducts());
    setRefreshing(false);
  };

  return (
    <AllProductsMarkup
      {...props}
      loading={loading}
      products={products}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default AllProducts;
