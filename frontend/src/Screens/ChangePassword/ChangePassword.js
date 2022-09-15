import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, updatePassword} from '../../redux/actions/userAction';
import ChangePasswordMarkup from './ChangePasswordMarkup';
import {showMessage} from 'react-native-flash-message';
import {UPDATE_PASSWORD_RESET} from '../../redux/constants/userConstants';

const ChangePassword = props => {
  const [showOldPassword, setShowOldPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const {loading, isUpdated, error} = useSelector(state => state.profile);

  function handleBackButtonClick() {
    props.navigation.navigate('Profile');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const updatePressHandler = () => {
    if (oldPassword && newPassword && confirmPassword) {
      const data = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      dispatch(updatePassword(data));
    } else {
      showMessage({
        message: 'Error',
        description: 'All fields are required',
        type: 'danger',
      });
    }
  };

  useEffect(() => {
    if (error) {
      showMessage({
        message: 'Error',
        description: 'All fields are required',
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (isUpdated) {
      showMessage({
        message: 'Success',
        description: 'Password Updated Successfully',
        type: 'success',
      });
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, error, isUpdated]);

  return (
    <ChangePasswordMarkup
      {...props}
      showOldPassword={showOldPassword}
      setShowOldPassword={setShowOldPassword}
      showNewPassword={showNewPassword}
      setShowNewPassword={setShowNewPassword}
      showConfirmPassword={showConfirmPassword}
      setShowConfirmPassword={setShowConfirmPassword}
      oldPassword={oldPassword}
      setOldPassword={setOldPassword}
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      updatePressHandler={updatePressHandler}
      loading={loading}
    />
  );
};

export default ChangePassword;
