import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  adminDeleteUser,
  clearErrors,
  getAdminUsers,
} from '../../../redux/actions/userAction';
import AllUsersMarkup from './AllUsersMarkup';
import {showMessage} from 'react-native-flash-message';
import {DELETE_USER_RESET} from '../../../redux/constants/userConstants';

const AllUsers = props => {
  const dispatch = useDispatch();
  const {loading, users, error} = useSelector(state => state.adminUsers);
  const {
    loading: deleteLoading,
    isDeleted,
    error: deleteError,
  } = useSelector(state => state.deleteUser);
  const [refreshing, setRefreshing] = useState(false);
  const [noReload, setNoReload] = useState(false);

  useEffect(() => {
    dispatch(getAdminUsers());

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
      setNoReload(true);
      dispatch(getAdminUsers());
      showMessage({
        message: 'Success',
        description: 'User Deleted Successfully',
        type: 'success',
      });
      dispatch({type: DELETE_USER_RESET});
      setNoReload(false);
    }
  }, [dispatch, error, deleteError, isDeleted]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAdminUsers());
    setRefreshing(false);
  };

  const deleteUserOnPressHandler = data => {
    let id = data[0];
    dispatch(adminDeleteUser(id));
  };

  return (
    <AllUsersMarkup
      {...props}
      loading={noReload ? false : loading || noReload ? false : deleteLoading}
      users={users}
      refreshing={refreshing}
      onRefresh={onRefresh}
      deleteUserOnPressHandler={deleteUserOnPressHandler}
    />
  );
};

export default AllUsers;
