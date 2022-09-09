import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const SignInRegisterHeading = props => {
  return (
    <View style={styles.headingContainer}>
      <TouchableOpacity
        onPress={() => props.loginFunc()}
        style={[
          props.route.name === 'SignIn'
            ? {borderBottomWidth: 3, borderColor: 'tomato'}
            : {borderBottomWidth: 0, borderColor: '#fff'},
          styles.line,
        ]}>
        <Text style={styles.headingText}>{props.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.registerFunc()}
        style={[
          props.route.name === 'SignUp'
            ? {borderBottomWidth: 3, borderColor: 'tomato'}
            : {borderBottomWidth: 0, borderColor: '#fff'},
          styles.line,
        ]}>
        <Text style={styles.headingText}>{props.register}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInRegisterHeading;
