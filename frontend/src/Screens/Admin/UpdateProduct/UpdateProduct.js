import React, {useEffect, useState} from 'react';
import CreateProductMarkup from './UpdateProductMarkup';
import DocumentPicker from 'react-native-document-picker';
import ImgToBase64 from 'react-native-image-base64';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {
  clearErrors,
  getAdminProducts,
  getAllProducts,
  productDetails,
  updateProduct,
} from '../../../redux/actions/productAction';
import {UPDATE_PRODUCT_RESET} from '../../../redux/constants/productConstants';

const UpdateProduct = props => {
  let productId = props?.route?.params?.data;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [imagePreview, setImagePreview] = useState([]);
  const [imagePreviewLocal, setImagePreviewLocal] = useState([]);
  const [images, setImages] = useState([]);

  // redux
  const dispatch = useDispatch();
  const {
    loading,
    isUpdated,
    error: updateError,
  } = useSelector(state => state.deleteProduct);
  const {product, error} = useSelector(state => state.productDetails);

  const openFile = async () => {
    try {
      const result = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      imagePreview ? setImagePreview([]) : [];
      setImagePreviewLocal(result);
      for (const res of result) {
        ImgToBase64.getBase64String(res.uri)
          .then(base64String =>
            setImages('data:' + res.type + ';base64,' + base64String),
          )
          .catch(err => console.log(err));
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err);
      } else {
        throw err;
      }
    }
  };

  const createOnPressHandler = () => {
    if (name && price && stock && description && images) {
      const data = {
        name: name,
        price: price,
        Stock: stock,
        description: description,
        category: category,
        images: images,
      };
      dispatch(updateProduct(productId, data));
      dispatch(getAllProducts());
      dispatch(getAdminProducts());
    }
  };

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(productDetails(productId));
    } else {
      setName(product?.name);
      setPrice(JSON.stringify(product?.price));
      setDescription(product?.description);
      setCategory(product?.category);
      setStock(JSON.stringify(product?.Stock));
      if (product.images) {
        setImagePreviewLocal([]);
      }
      setImagePreview(product?.images);
    }

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (updateError) {
      showMessage({
        message: 'Error',
        description: updateError,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (isUpdated) {
      showMessage({
        message: 'Success',
        description: 'Product Updated Successfully',
        type: 'success',
      });
      dispatch(getAdminProducts());
      dispatch(getAllProducts());
      setName('');
      setPrice('');
      setDescription('');
      setCategory('');
      setStock('');
      setImagePreviewLocal([]);
      setImagePreview([]);
      dispatch({type: UPDATE_PRODUCT_RESET});
      props.navigation.navigate('AllProducts', {success: isUpdated});
    }
  }, [
    dispatch,
    product._id,
    product,
    productId,
    error,
    updateError,
    isUpdated,
  ]);

  return (
    <CreateProductMarkup
      {...props}
      openFile={openFile}
      name={name}
      setName={setName}
      price={price}
      product={product}
      setPrice={setPrice}
      description={description}
      setDescription={setDescription}
      category={category}
      setCategory={setCategory}
      stock={stock}
      setStock={setStock}
      createOnPressHandler={createOnPressHandler}
      imagePreview={imagePreview}
      imagePreviewLocal={imagePreviewLocal}
      loading={loading}
    />
  );
};

export default UpdateProduct;
