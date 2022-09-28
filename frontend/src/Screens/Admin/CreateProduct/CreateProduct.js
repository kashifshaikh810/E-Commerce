import React, {useEffect, useState} from 'react';
import CreateProductMarkup from './CreateProductMarkup';
import DocumentPicker from 'react-native-document-picker';
import ImgToBase64 from 'react-native-image-base64';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {
  clearErrors,
  createProduct,
  getAdminProducts,
} from '../../../redux/actions/productAction';
import {NEW_PRODUCT_RESET} from '../../../redux/constants/productConstants';

const CreateProduct = props => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [imagePreview, setImagePreview] = useState([]);
  const [images, setImages] = useState([]);

  // redux
  const dispatch = useDispatch();
  const {loading, success, error} = useSelector(state => state.newProduct);

  const openFile = async () => {
    try {
      const result = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      console.log(result);
      setImagePreview(result);
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
      dispatch(createProduct(data));
      dispatch(getAdminProducts());
    }
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

    if (success) {
      showMessage({
        message: 'Success',
        description: 'Product Successfully Created',
        type: 'success',
      });
      dispatch({type: NEW_PRODUCT_RESET});
      setName('');
      setPrice('');
      setDescription('');
      setCategory('');
      setStock('');
      setImagePreview([]);
      setImages([]);
    }
  }, [dispatch, error, success]);

  return (
    <CreateProductMarkup
      {...props}
      openFile={openFile}
      name={name}
      setName={setName}
      price={price}
      setPrice={setPrice}
      description={description}
      setDescription={setDescription}
      category={category}
      setCategory={setCategory}
      stock={stock}
      setStock={setStock}
      createOnPressHandler={createOnPressHandler}
      imagePreview={imagePreview}
      loading={loading}
    />
  );
};

export default CreateProduct;
