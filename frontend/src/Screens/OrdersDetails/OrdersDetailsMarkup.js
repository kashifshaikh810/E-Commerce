import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';

const OrdersDetailsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Orders" />
      <ScrollView>
        <Text>OrdersDetailsMarkup</Text>
      </ScrollView>
    </View>
  );
};

export default OrdersDetailsMarkup;
