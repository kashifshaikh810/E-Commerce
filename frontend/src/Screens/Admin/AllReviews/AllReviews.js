import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getAllReviews} from '../../../redux/actions/productAction';
import AllReviewsMarkup from './AllReviewsMarkup';
import {showMessage} from 'react-native-flash-message';

const AllReviews = props => {
  const dispatch = useDispatch();
  const {loading, reviews, error} = useSelector(state => state.allAdminReviews);
  const [productId, setProductId] = useState('');

  const productOnChangeText = id => {
    setProductId(id);
  };

  const searchOnPressHandler = () => {
    dispatch(getAllReviews(productId));
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
  }, [dispatch, error]);

  return (
    <AllReviewsMarkup
      {...props}
      productId={productId}
      setProductId={setProductId}
      productOnChangeText={productOnChangeText}
      loading={loading === true ? loading : false}
      reviews={reviews}
      searchOnPressHandler={searchOnPressHandler}
    />
  );
};

export default AllReviews;
