import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  getAllProducts,
} from '../../../redux/actions/productAction';
import HomeMarkup from './HomeMarkup';
import {showMessage} from 'react-native-flash-message';

const Home = props => {
  const dispatch = useDispatch();
  const {loading, products, error} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts());

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }
  }, [dispatch]);

  return <HomeMarkup {...props} loading={loading} products={products} />;
};

export default Home;
