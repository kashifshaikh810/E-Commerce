import React, {useState} from 'react';
import AllReviewsMarkup from './AllReviewsMarkup';

const AllReviews = props => {
  const [productId, setProductId] = useState('');

  return (
    <AllReviewsMarkup
      {...props}
      productId={productId}
      setProductId={setProductId}
    />
  );
};

export default AllReviews;
