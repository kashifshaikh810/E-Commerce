import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  deleteUserReview,
  getAllReviews,
} from '../../../redux/actions/productAction';
import AllReviewsMarkup from './AllReviewsMarkup';
import {showMessage} from 'react-native-flash-message';
import {DELETE_REVIEW_RESET} from '../../../redux/constants/productConstants';

const AllReviews = props => {
  const dispatch = useDispatch();
  const {loading, reviews, error} = useSelector(state => state.allAdminReviews);
  const {
    loading: deleteLoading,
    isDeleted,
    error: deleteError,
  } = useSelector(state => state.deleteUserReview);
  const [productId, setProductId] = useState('');

  const productOnChangeText = id => {
    setProductId(id);
  };

  const searchOnPressHandler = () => {
    dispatch(getAllReviews(productId));
  };

  const deleteReview = data => {
    let id = data[0];
    dispatch(deleteUserReview(id, productId));
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

    if (deleteError) {
      showMessage({
        message: 'Error',
        description: deleteError,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (isDeleted) {
      dispatch(getAllReviews(productId));
      showMessage({
        message: 'Success',
        description: 'Review Deleted Successfully',
        type: 'success',
      });
      dispatch({type: DELETE_REVIEW_RESET});
    }
  }, [dispatch, error, deleteError, isDeleted, productId]);

  return (
    <AllReviewsMarkup
      {...props}
      productId={productId}
      setProductId={setProductId}
      productOnChangeText={productOnChangeText}
      loading={loading === true ? loading : false}
      reviews={reviews}
      searchOnPressHandler={searchOnPressHandler}
      deleteReview={deleteReview}
    />
  );
};

export default AllReviews;
