import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const SignInRegisterHeading = props => {
  return (
    <View style={styles.headingContainer}>
      <TouchableOpacity
        onPress={() => props.loginFunc()}
        style={[
          props.show
            ? {borderBottomWidth: 0, borderColor: '#fff'}
            : {borderBottomWidth: 3, borderColor: 'tomato'},
          styles.line,
        ]}>
        <Text style={styles.headingText}>{props.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.registerFunc()}
        style={[
          props.show
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
