import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import ProfileMarkup from './ProfileMarkup';
import {useDispatch, useSelector} from 'react-redux';
import {showLineLogin} from '../../redux/actions/productAction';

const Profile = props => {
  const {loading, user, isAuthenticated} = useSelector(
    state => state.userRegister,
  );
  const dispatch = useDispatch();

  if (isAuthenticated === false) {
    dispatch(showLineLogin(false));
    props.navigation.navigate('SignIn');
  }
  return <ProfileMarkup {...props} user={user} loading={loading} />;
};

export default Profile;
