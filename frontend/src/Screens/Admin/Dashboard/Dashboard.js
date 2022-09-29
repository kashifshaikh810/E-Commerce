import React from 'react';
import {useDispatch} from 'react-redux';
import {getAdminProducts} from '../../../redux/actions/productAction';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  const dispatch = useDispatch();

  const chartConfigs = [
    {
      color: (opacity = 1) => `rgba(26, 255, 223, ${opacity})`,
    },
  ];

  const pieChartData = [
    {
      name: 'Out of Stock',
      stock: 20,
      color: 'tomato',
      legendFontColor: '#7F7F7F',
      legendFontSize: 14,
    },
    {
      name: 'InStock',
      stock: 10,
      color: 'green',
      legendFontColor: '#7F7F7F',
      legendFontSize: 14,
    },
  ];

  const circleData = [
    {
      title: 'Products',
      backgroundColor: 'rgb(255, 110, 110)',
      textColor: 'rgb(255, 255, 255)',
      quantity: 2,
      onPress: () => {
        dispatch(getAdminProducts());
        props.navigation.navigate('AllProducts', {backRouteName: 'Dashboard'});
      },
    },
    {
      title: 'Orders',
      backgroundColor: 'lightgreen',
      textColor: 'rgb(0, 0, 0)',
      quantity: 4,
      onPress: () => {
        props.navigation.navigate('AllOrders', {backRouteName: 'Dashboard'});
      },
    },
    {
      title: 'Users',
      backgroundColor: 'lightblue',
      textColor: 'rgb(255, 255, 255)',
      quantity: 6,
      onPress: () => {
        props.navigation.navigate('AllUsers', {backRouteName: 'Dashboard'});
      },
    },
  ];

  return (
    <DashboardMarkup
      {...props}
      chartConfigs={chartConfigs}
      pieChartData={pieChartData}
      circleData={circleData}
    />
  );
};

export default Dashboard;
