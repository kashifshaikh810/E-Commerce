import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../../components/Layouts/Header/Header';
import DashboardTopBar from '../../../components/materials/DashboardTopBar/DashboardTopBar';

const AllOrdersMarkup = props => {
  let param = props?.route?.params?.backRouteName;

  return (
    <View style={styles.container}>
      <Header {...props} backRouteName={param ? param : 'Home'} />

      <DashboardTopBar {...props} />

      <ScrollView style={styles.scrollView}>
        <Text>AllOrdersMarkup</Text>
      </ScrollView>
    </View>
  );
};

export default AllOrdersMarkup;
