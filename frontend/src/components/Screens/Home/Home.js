import React, {useEffect, useRef, useState} from 'react';
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
  const scrollViewRef = useRef();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAllProducts());
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const scollPressHandler = () => {
    scrollViewRef.current.scrollTo({y: 270, animated: true});
  };

  useEffect(() => {
    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    dispatch(getAllProducts());
  }, [dispatch, error]);

  return (
    <HomeMarkup
      {...props}
      loading={loading}
      products={products}
      scrollViewRef={scrollViewRef}
      scollPressHandler={scollPressHandler}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default Home;
