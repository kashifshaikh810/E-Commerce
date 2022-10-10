import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/Layouts/Header/Header';
import styles from './SignInStyles';
import {Input} from '@rneui/themed';
import SignInRegisterHeading from '../../components/Layouts/SignInRegisterHeading/SignInRegisterHeading';
import MyButton from '../../components/Layouts/Button/Button';
import {useDispatch, useSelector} from 'react-redux';

// Icons
import EmailIcon from 'react-native-vector-icons/Fontisto';
import PasswordIcon from 'react-native-vector-icons/Feather';
import {showMessage} from 'react-native-flash-message';
import {
  clearErrors,
  userLogin,
  successClear,
} from '../../redux/actions/userAction';

const SignIn = props => {
  const dispatch = useDispatch();
  const {isAuthenticated, error, loading, success, user} = useSelector(
    state => state.userRegister,
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    props.navigation.navigate('SignIn');
  };

  const register = () => {
    props.navigation.navigate('SignUp');
  };

  const signInPressHandler = () => {
    dispatch(userLogin(email, password));
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

    if (success && user !== null && isAuthenticated === true) {
      setEmail('');
      setPassword('');
      showMessage({
        message: 'Success',
        description: 'Login Successfully',
        type: 'success',
      });
      dispatch(successClear());
    }
  }, [error, dispatch, success, user]);

  if (user === null)
    return (
      <>
        <View style={styles.scrollView}>
          <Header {...props} />
          <ScrollView style={styles.container}>
            <View style={styles.inputsContainer}>
              <SignInRegisterHeading
                {...props}
                login="login"
                register="register"
                loginFunc={login}
                registerFunc={register}
              />

              <Input
                style={styles.paddingLeft}
                keyboardType="email-address"
                placeholder="Email"
                leftIcon={
                  <EmailIcon name="email" size={25} color="rgba(0,0,0,0.623)" />
                }
                value={email}
                onChangeText={email => setEmail(email)}
              />

              <Input
                style={styles.paddingLeft}
                secureTextEntry
                placeholder="Password"
                leftIcon={
                  <PasswordIcon
                    name="lock"
                    size={25}
                    color="rgba(0,0,0,0.623)"
                  />
                }
                value={password}
                onChangeText={password => setPassword(password)}
              />

              <MyButton
                {...props}
                onPress={() => signInPressHandler()}
                title="Log In"
                loading={loading}
                disabled={!email || !password}
                color={{color: '#b3b3b3'}}
                buttonStyle={{backgroundColor: 'tomato', borderRadius: 10}}
                size="lg"
              />
            </View>
          </ScrollView>
        </View>
      </>
    );
};

export default SignIn;
