import React from 'react';
import ProfileMarkup from './ProfileMarkup';
import {useSelector} from 'react-redux';

const Profile = props => {
  const {loading, user} = useSelector(state => state.userRegister);

  return <ProfileMarkup {...props} user={user} loading={loading} />;
};

export default Profile;
