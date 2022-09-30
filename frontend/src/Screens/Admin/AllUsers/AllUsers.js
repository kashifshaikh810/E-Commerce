import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getAdminUsers} from '../../../redux/actions/userAction';
import AllUsersMarkup from './AllUsersMarkup';
import {showMessage} from 'react-native-flash-message';

const AllUsers = props => {
  const dispatch = useDispatch();
  const {loading, users, error} = useSelector(state => state.adminUsers);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(getAdminUsers());

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'success',
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAdminUsers());
    setRefreshing(false);
  };

  return (
    <AllUsersMarkup
      {...props}
      loading={loading}
      users={users}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default AllUsers;
