import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  deleteProduct,
  getAdminProducts,
  getAllProducts,
} from '../../../redux/actions/productAction';
import AllProductsMarkup from './AllProductsMarkup';
import {showMessage} from 'react-native-flash-message';
import {DELETE_PRODUCT_RESET} from '../../../redux/constants/productConstants';

const AllProducts = props => {
  const dispatch = useDispatch();
  let paramFromCreateProduct = props?.route?.params?.success;
  const {loading, products, error} = useSelector(state => state.adminProducts);
  const {isDeleted, error: deleteProductError} = useSelector(
    state => state.deleteProduct,
  );
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getAdminProducts());

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (deleteProductError) {
      showMessage({
        message: 'Error',
        description: deleteProductError,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (isDeleted) {
      dispatch(getAdminProducts());
      dispatch(getAllProducts());
      showMessage({
        message: 'Success',
        description: 'Product Deleted Successfully',
        type: 'success',
      });
      dispatch({type: DELETE_PRODUCT_RESET});
    }
  }, [dispatch, error, deleteProductError, isDeleted]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAdminProducts());
    setRefreshing(false);
  };

  const deleteProductOnPressHandler = data => {
    let productId = data ? data[0] : '';
    dispatch(deleteProduct(productId));
  };

  return (
    <AllProductsMarkup
      {...props}
      loading={paramFromCreateProduct ? false : loading}
      products={products}
      refreshing={refreshing}
      onRefresh={onRefresh}
      deleteProductOnPressHandler={deleteProductOnPressHandler}
      paramFromCreateProduct={paramFromCreateProduct}
    />
  );
};

export default AllProducts;
