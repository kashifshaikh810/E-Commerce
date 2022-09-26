import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

// Icons
import DashboardIcon from 'react-native-vector-icons/MaterialIcons';
import ImportExportIcon from 'react-native-vector-icons/MaterialIcons';
import ListAltIcon from 'react-native-vector-icons/MaterialIcons';
import PeopleIcon from 'react-native-vector-icons/Ionicons';
import RateReviewIcon from 'react-native-vector-icons/MaterialIcons';
import PostAddIcon from 'react-native-vector-icons/MaterialIcons';
import AddIcon from 'react-native-vector-icons/Ionicons';

const DashboardTopBar = props => {
  const [showProductsList, setShowProductsList] = useState(false);

  const showProducts = () => {
    setShowProductsList(!showProductsList);
  };

  const data = [
    {
      name: 'Dashboard',
      icon: <DashboardIcon name="dashboard" size={25} color="#b3b3b3" />,
      onPress: () => {
        props.navigation.navigate('Dashboard'), setShowProductsList(false);
      },
    },
    {
      name: 'Products',
      icon: (
        <ImportExportIcon
          name={showProductsList ? 'expand-more' : 'import-export'}
          size={25}
          color="#b3b3b3"
        />
      ),
      onPress: () => {
        props.navigation.navigate('Dashboard'), setShowProductsList(false);
      },
    },
    {
      name: 'Orders',
      icon: <ListAltIcon name="list-alt" size={25} color="#b3b3b3" />,
      onPress: () => {
        props.navigation.navigate('AllOrders'), setShowProductsList(false);
      },
    },
    {
      name: 'Users',
      icon: <PeopleIcon name="people" size={25} color="#b3b3b3" />,
      onPress: () => {
        props.navigation.navigate('AllUsers'), setShowProductsList(false);
      },
    },
    {
      name: 'Reviews',
      icon: <RateReviewIcon name="rate-review" size={25} color="#b3b3b3" />,
      onPress: () => {
        props.navigation.navigate('AllReviews'), setShowProductsList(false);
      },
    },
  ];

  const onPressHandler = item => {
    if (item.name === 'Products') {
      if (props?.route?.name !== 'Dashboard') {
        props.navigation.navigate('Dashboard');
        setShowProductsList(false);
      }
      showProducts();
    } else {
      item.onPress();
    }
  };

  console.log(props.route.name);
  return (
    <View>
      <ScrollView
        scrollEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dataContainer,
              showProductsList ? styles.height : {},
            ]}
            onPress={() => onPressHandler(item)}>
            <View style={styles.icon}>{item.icon}</View>
            <Text style={styles.iconName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        {showProductsList && (
          <View style={styles.productsList}>
            <TouchableOpacity
              style={styles.flexRow}
              onPress={() => {
                props.navigation.navigate('AllProducts');
                setShowProductsList(false);
              }}>
              <PostAddIcon name="post-add" size={25} color="#b3b3b3" />
              <Text style={styles.productsListText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.flexRow}
              onPress={() => {
                props.navigation.navigate('CreateProduct');
                setShowProductsList(false);
              }}>
              <AddIcon name="add" size={25} color="#b3b3b3" />
              <Text style={styles.productsListText}>Create</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <View style={styles.divider} />
    </View>
  );
};

export default DashboardTopBar;
