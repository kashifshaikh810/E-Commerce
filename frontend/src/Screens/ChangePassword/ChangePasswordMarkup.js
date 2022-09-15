import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import MyButton from '../../components/Layouts/Button/Button';
import EyeIcon from 'react-native-vector-icons/Feather';
import LockOpenIcon from 'react-native-vector-icons/MaterialIcons';
import KeyIcon from 'react-native-vector-icons/Foundation';
import {Input} from '@rneui/themed';

const ChangePasswordMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Profile" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Change Password</Text>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Input
              style={styles.paddingLeft}
              secureTextEntry={props.showOldPassword}
              placeholder="Old Password"
              leftIcon={
                <KeyIcon name="key" size={30} color="rgba(0,0,0,0.623)" />
              }
              rightIcon={
                <EyeIcon
                  name={props.showOldPassword ? 'eye-off' : 'eye'}
                  size={30}
                  color="rgba(0,0,0,0.623)"
                  onPress={() =>
                    props.setShowOldPassword(!props.showOldPassword)
                  }
                />
              }
              value={props.oldPassword}
              onChangeText={text => props.setOldPassword(text)}
            />
          </View>

          <View>
            <Input
              style={styles.paddingLeft}
              secureTextEntry={props.showNewPassword}
              placeholder="New Password"
              leftIcon={
                <LockOpenIcon
                  name="lock-open"
                  size={30}
                  color="rgba(0,0,0,0.623)"
                />
              }
              rightIcon={
                <EyeIcon
                  name={props.showNewPassword ? 'eye-off' : 'eye'}
                  size={30}
                  color="rgba(0,0,0,0.623)"
                  onPress={() =>
                    props.setShowNewPassword(!props.showNewPassword)
                  }
                />
              }
              value={props.newPassword}
              onChangeText={text => props.setNewPassword(text)}
            />
          </View>

          <View>
            <Input
              style={styles.paddingLeft}
              secureTextEntry={props.showConfirmPassword}
              placeholder="Confirm Password"
              leftIcon={
                <LockOpenIcon name="lock" size={30} color="rgba(0,0,0,0.623)" />
              }
              rightIcon={
                <EyeIcon
                  name={props.showConfirmPassword ? 'eye-off' : 'eye'}
                  size={30}
                  color="rgba(0,0,0,0.623)"
                  onPress={() =>
                    props.setShowConfirmPassword(!props.showConfirmPassword)
                  }
                />
              }
              value={props.confirmPassword}
              onChangeText={text => props.setConfirmPassword(text)}
            />
          </View>

          <MyButton
            {...props}
            title="Change"
            onPress={() => props.updatePressHandler()}
            loading={props.loading}
            buttonStyle={styles.buttonStyle}
            size="lg"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangePasswordMarkup;
