import React, {useEffect, useState} from 'react';
import EditProfileMarkup from './EditProfileMarkup';
import DocumentPicker from 'react-native-document-picker';
import ImgToBase64 from 'react-native-image-base64';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  loadUser,
  updateProfile,
} from '../../redux/actions/userAction';
import {showMessage} from 'react-native-flash-message';
import {UPDATE_PROFILE_RESET} from '../../redux/constants/userConstants';

const EditProfile = props => {
  const {user} = useSelector(state => state.userRegister);
  const {loading, isUpdated, error} = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const [imagePreview, setImagePreview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const openFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      for (const res of result) {
        setImagePreview(res.uri);
        ImgToBase64.getBase64String(res.uri)
          .then(base64String =>
            setAvatar('data:' + res.type + ';base64,' + base64String),
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

  const updatePressHandler = () => {
    const data = {
      name: name,
      email: email,
      avatar: avatar,
    };

    dispatch(updateProfile(data));
  };

  useEffect(() => {
    if (user || props?.route?.params?.forUse) {
      setName(user?.name);
      setEmail(user?.email);
      setImagePreview(user?.avatar.url);
    }

    if (isUpdated) {
      dispatch(loadUser());
      showMessage({
        message: 'Success',
        description: 'Profile Updated Successfully',
        type: 'success',
      });
      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
      props.navigation.navigate('Profile');
    }

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }
  }, [props.route.params, user, isUpdated, error, props.navigation]);

  return (
    <EditProfileMarkup
      {...props}
      imagePreview={imagePreview}
      openFile={openFile}
      setImagePreview={setImagePreview}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      updatePressHandler={updatePressHandler}
      loading={loading}
    />
  );
};

export default EditProfile;
