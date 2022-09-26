import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../../components/Layouts/Header/Header';
import DashboardTopBar from '../../../components/materials/DashboardTopBar/DashboardTopBar';

const AllReviewsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Home" />

      <DashboardTopBar {...props} />

      <ScrollView style={styles.scrollView}>
        <Text>AllReviewsMarkup</Text>
      </ScrollView>
    </View>
  );
};

export default AllReviewsMarkup;
