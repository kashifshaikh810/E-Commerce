import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import Lottie from 'lottie-react-native';

const Contact = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <View style={styles.contactContainer}>
        <View>
          <Text
            style={[
              styles.textStyle,
              {fontFamily: 'RubikMarkerHatch-Regular'},
            ]}>
            THIS IS ECOMMERCE APP
          </Text>
          <Text
            style={[
              styles.textStyle,
              {fontFamily: 'RubikMarkerHatch-Regular'},
            ]}>
            FOR ANY QUERY
          </Text>
          <Text
            style={[
              styles.textStyle,
              {fontFamily: 'RubikMarkerHatch-Regular'},
            ]}>
            CONTACT US : - DEVELOPER01
          </Text>
        </View>
        <Lottie
          source={require('../../components/images/110986-contact-us.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
      <Footer {...props} style={styles.footer} />
    </View>
  );
};

export default Contact;
