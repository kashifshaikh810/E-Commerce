import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UpdateUserMarkup from './UpdateUserMarkup';

const UpdateUser = props => {
  const dispatch = useDispatch();
  // const {} = useSelector((state) => )

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  let id = props.route.params.id;

  return (
    <UpdateUserMarkup
      {...props}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      role={role}
      setRole={setRole}
    />
  );
};

export default UpdateUser;
