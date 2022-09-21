import React, {useEffect, useRef, useState} from 'react';
import ProductDetailsMarkup from './ProductDetailsMarkup';
import {useDispatch, useSelector} from 'react-redux';
import {newReview, productDetails} from '../../redux/actions/productAction';
import Orientation from '../../components/Layouts/Orientation/Orientation';
import {Dimensions} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {clearErrors} from '../../components/../redux/actions/userAction';
import {NEW_REVIEW_RESET} from '../../components/../redux/constants/productConstants';
import {getInputRangeFromIndexes} from '../../components/Layouts/Carousel/index';
import {addItemsToCart} from '../../components/../redux/actions/cartAction';

const ProductDetails = props => {
  const dispatch = useDispatch();
  const productID = props?.route?.params?.productID;
  const {loading, product, error} = useSelector(state => state.productDetails);
  const {user} = useSelector(state => state.userRegister);
  const {
    loading: reviewLoading,
    success,
    error: reviewError,
  } = useSelector(state => state.newReview);
  let image = '';
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);
  const [ratings, setRatings] = useState(0);
  const [comment, setComment] = useState('');
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [orientation, setOrientation] = useState(
    Orientation.isPortrait() ? 'portrait' : 'landscape',
  );

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setOrientation(Orientation.isPortrait() ? 'portrait' : 'landscape');
    });
  }, []);

  useEffect(() => {
    const range = [2, 1, 0, -1];
    getInputRangeFromIndexes(range, index, isCarousel);
  }, [index, isCarousel]);

  useEffect(() => {
    if (success) {
      showMessage({
        message: 'Success',
        description: 'Review Submitted Successfully',
        type: 'success',
      });
      setRatings(0);
      setComment('');
      toggleOverlay();
      dispatch({type: NEW_REVIEW_RESET});
    }

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (reviewError) {
      showMessage({
        message: 'Error',
        description: reviewError,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    dispatch(productDetails(productID));
  }, [dispatch, productID, reviewError, error, success]);

  product &&
    product?.images?.forEach((i, a) => {
      image = i ? i?.url : '';
    });

  const submitReview = () => {
    if (ratings && comment) {
      const data = {
        rating: ratings,
        comment: comment,
        productId: productID,
      };
      dispatch(newReview(data));
    }
  };

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCart = async () => {
    dispatch(addItemsToCart(productID, quantity));
    showMessage({
      message: 'Success',
      description: 'Cart Added Sucessfully',
      type: 'success',
    });
  };

  return (
    <ProductDetailsMarkup
      {...props}
      orientation={orientation}
      detailsLoading={loading}
      product={product}
      image={image}
      quantity={quantity}
      setQuantity={setQuantity}
      toggleOverlay={toggleOverlay}
      visible={visible}
      setVisible={setVisible}
      submitReview={submitReview}
      ratings={ratings}
      setRatings={setRatings}
      comment={comment}
      setComment={setComment}
      loading={reviewLoading}
      user={user}
      index={index}
      setIndex={setIndex}
      isCarousel={isCarousel}
      addToCart={addToCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  );
};

export default ProductDetails;
