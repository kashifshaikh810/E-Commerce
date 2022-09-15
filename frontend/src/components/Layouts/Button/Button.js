import React from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/themed';
import styles from './Styles';

const MyButton = props => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        size={props.size}
        buttonStyle={props.buttonStyle}
        title={props.title}
        loadingProps={props.color}
        disabled={props.loading || props.disabled}
        onPress={() => props.onPress()}
      />
    </View>
  );
};

export default MyButton;
