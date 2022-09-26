import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../../components/Layouts/Header/Header';
import DashboardTopBar from '../../../components/materials/DashboardTopBar/DashboardTopBar';

const CreateProductMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Home" />

      <DashboardTopBar {...props} />

      <ScrollView style={styles.scrollView}>
        <Text>CreateProductMarkup</Text>
      </ScrollView>
    </View>
  );
};

export default CreateProductMarkup;
