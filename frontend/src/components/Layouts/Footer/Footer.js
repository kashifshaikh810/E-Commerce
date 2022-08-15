import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Footer = props => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.heading,
          {fontFamily: 'DynaPuff-VariableFont_wdth,wght'},
        ]}>
        ECOMMERCE.
      </Text>
      <Text
        style={[
          styles.bottomHeading,
          {fontFamily: 'RubikMarkerHatch-Regular'},
        ]}>
        High Quality is our first priority
      </Text>
      <Text
        style={[
          styles.bottomHeading,
          {fontFamily: 'RubikMarkerHatch-Regular'},
        ]}>
        Copyrights 2022 © developer01
      </Text>
    </View>
  );
};

export default Footer;
