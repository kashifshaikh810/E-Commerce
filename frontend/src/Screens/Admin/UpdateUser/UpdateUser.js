import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearErrors,
  getAdminUsers,
  getUserDetails,
  updateUserDetails,
} from '../../../redux/actions/userAction';
import UpdateUserMarkup from './UpdateUserMarkup';
import {showMessage} from 'react-native-flash-message';
import {UPDATE_USER_RESET} from '../../../redux/constants/userConstants';

const UpdateUser = props => {
  const dispatch = useDispatch();
  let id = props.route.params.id;
  const {loading, user, error} = useSelector(state => state.userDetails);
  const {
    loading: updateLoading,
    isUpdated,
    error: updateError,
  } = useSelector(state => state.updateUser);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (user && user._id !== id) {
      dispatch(getUserDetails(id));
    } else {
      setName(user?.name);
      setEmail(user?.email);
      setRole(user?.role);
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
      dispatch(getAdminUsers());
      dispatch(getUserDetails(id));
      showMessage({
        message: 'Success',
        description: 'User Updated Successfully',
        type: 'success',
      });
      dispatch({type: UPDATE_USER_RESET});
      props.navigation.navigate('AllUsers');
    }
  }, [dispatch, id, error, user, user?._id, updateError, isUpdated]);

  const updateUserOnPressHandler = () => {
    const userData = {
      name: name,
      email: email,
      role: role,
    };

    dispatch(updateUserDetails(id, userData));
  };

  return (
    <UpdateUserMarkup
      {...props}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      role={role}
      setRole={setRole}
      loading={loading ? loading : updateLoading}
      updateUserOnPressHandler={updateUserOnPressHandler}
    />
  );
};

export default UpdateUser;
