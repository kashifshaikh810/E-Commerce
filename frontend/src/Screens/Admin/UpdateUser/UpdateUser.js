import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, getUserDetails} from '../../../redux/actions/userAction';
import UpdateUserMarkup from './UpdateUserMarkup';
import {showMessage} from 'react-native-flash-message';

const UpdateUser = props => {
  const dispatch = useDispatch();
  let id = props.route.params.id;
  const {loading, user, error} = useSelector(state => state.userDetails);

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
  }, [dispatch, id, error, user, user?._id]);

  return (
    <UpdateUserMarkup
      {...props}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      role={role}
      setRole={setRole}
      loading={loading}
    />
  );
};

export default UpdateUser;
