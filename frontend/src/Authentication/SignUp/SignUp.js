import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, ToastAndroid} from 'react-native';
import Header from '../../components/Layouts/Header/Header';
import styles from './SignUpStyles';
import {Input, Card, Avatar} from '@rneui/themed';
import SignInRegisterHeading from '../../components/Layouts/SignInRegisterHeading/SignInRegisterHeading';
import MyButton from '../../components/Layouts/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import ImgToBase64 from 'react-native-image-base64';
import {showMessage} from 'react-native-flash-message';

// Icons
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import PasswordIcon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  clearErrors,
  successClear,
  userRegister,
} from '../../redux/actions/userAction';

const SignUp = props => {
  const dispatch = useDispatch();
  const {loading, error, success} = useSelector(state => state.userRegister);
  const [imagePreview, setImagePreview] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    props.navigation.navigate('SignIn');
  };

  const register = () => {
    props.navigation.navigate('SignUp');
  };

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

  const registerPressHandler = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
    };
    dispatch(userRegister(data));
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

    if (success) {
      setName('');
      setEmail('');
      setPassword('');
      setAvatar('');
      setImagePreview('');
      showMessage({
        message: 'Success',
        description: 'SignUp Successfully',
        type: 'success',
      });
      dispatch(successClear());
      props.navigation.navigate('SignIn');
    }
  }, [error, dispatch, success, props.navigation]);

  return (
    <>
      <View style={styles.scrollView}>
        <Header {...props} title="ecommerce" />
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
              placeholder="Name"
              leftIcon={
                <ProfileIcon
                  name="face-man-profile"
                  size={25}
                  color="rgba(0,0,0,0.623)"
                />
              }
              value={name}
              onChangeText={name => setName(name)}
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
                <PasswordIcon name="lock" size={25} color="rgba(0,0,0,0.623)" />
              }
              value={password}
              onChangeText={password => setPassword(password)}
            />

            <View style={styles.imgPreaviewContainer}>
              {imagePreview ? (
                <View style={styles.marginTop}>
                  <Avatar size={60} rounded source={{uri: imagePreview}} />
                </View>
              ) : (
                <View style={styles.marginTop}>
                  <Avatar
                    size={60}
                    rounded
                    source={require('../../components/images/Profile.png')}
                  />
                </View>
              )}
              <View style={styles.card}>
                <TouchableOpacity
                  onPress={() =>
                    imagePreview ? setImagePreview('') : openFile()
                  }>
                  <Card>
                    <Text
                      style={[
                        styles.chooseFileTitle,
                        imagePreview ? styles.red : styles.gray,
                      ]}>
                      {imagePreview ? 'Remove' : 'Choose File'}
                    </Text>
                  </Card>
                </TouchableOpacity>
              </View>
            </View>

            <MyButton
              {...props}
              title="Register"
              onPress={() => registerPressHandler()}
              loading={loading}
              disabled={!name || !email || !password || !avatar}
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

export default SignUp;
