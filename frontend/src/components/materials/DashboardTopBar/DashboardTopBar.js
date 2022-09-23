import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

// Icons
import DashboardIcon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon name="dashboard" size={25} color="#b3b3b3" />,
    onPress: () => {},
  },
  {
    name: 'Products',
    icon: <DashboardIcon name="dashboard" size={25} color="#b3b3b3" />,
    onPress: () => {},
  },
  {
    name: 'Orders',
    icon: <DashboardIcon name="dashboard" size={25} color="#b3b3b3" />,
    onPress: () => {},
  },
  {
    name: 'Users',
    icon: <DashboardIcon name="dashboard" size={25} color="#b3b3b3" />,
    onPress: () => {},
  },
  {
    name: 'Reviews',
    icon: <DashboardIcon name="dashboard" size={25} color="#b3b3b3" />,
    onPress: () => {},
  },
];

const DashboardTopBar = props => {
  const [showProductsList, setShowProductsList] = useState(false);

  const showProducts = () => {
    console.log('res');
    setShowProductsList(!showProductsList);
  };

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
            style={styles.dataContainer}
            onPress={() => item.name === 'Products' && showProducts()}>
            <View style={styles.icon}>{item.icon}</View>
            <Text style={styles.iconName}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        {showProductsList && (
          <View>
            <Text>test</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default DashboardTopBar;
