import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAdminOrders} from '../../../redux/actions/ordersAction';
import {getAdminProducts} from '../../../redux/actions/productAction';
import {getAdminUsers} from '../../../redux/actions/userAction';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.adminProducts);
  const {orders} = useSelector(state => state.adminOrders);
  const {users} = useSelector(state => state.adminUsers);

  // outofstock
  let outOfStock = 0;
  products &&
    products.forEach(item => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  // total amount
  let totalAmount = 0;
  orders &&
    orders.forEach(item => {
      totalAmount = item.totalPrice;
    });

  const chartConfigs = [
    {
      color: (opacity = 1) => `rgba(26, 255, 223, ${opacity})`,
    },
  ];

  const pieChartData = [
    {
      name: 'Out of Stock',
      stock: outOfStock && outOfStock,
      color: 'tomato',
      legendFontColor: '#7F7F7F',
      legendFontSize: 14,
    },
    {
      name: 'InStock',
      stock: products && products?.length - outOfStock,
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
      quantity: products && products?.length,
      onPress: () => {
        dispatch(getAdminProducts());
        props.navigation.navigate('AllProducts', {backRouteName: 'Dashboard'});
      },
    },
    {
      title: 'Orders',
      backgroundColor: 'lightgreen',
      textColor: 'rgb(0, 0, 0)',
      quantity: orders && orders?.length,
      onPress: () => {
        props.navigation.navigate('AllOrders', {backRouteName: 'Dashboard'});
      },
    },
    {
      title: 'Users',
      backgroundColor: 'lightblue',
      textColor: 'rgb(255, 255, 255)',
      quantity: users && users?.length,
      onPress: () => {
        props.navigation.navigate('AllUsers', {backRouteName: 'Dashboard'});
      },
    },
  ];

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAdminProducts());
    dispatch(getAdminOrders());
    dispatch(getAdminUsers());
    setRefreshing(false);
  };

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAdminOrders());
    dispatch(getAdminUsers());
  }, [dispatch]);

  return (
    <DashboardMarkup
      {...props}
      chartConfigs={chartConfigs}
      pieChartData={pieChartData}
      circleData={circleData}
      totalAmount={totalAmount}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
};

export default Dashboard;
