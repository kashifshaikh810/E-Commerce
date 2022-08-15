import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './HeaderStyles';
import {Dialog, Avatar} from '@rneui/themed';

// icons
import MenuIcon from 'react-native-vector-icons/Feather';
import DashboardIcon from 'react-native-vector-icons/MaterialIcons';
import OrderIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/FontAwesome5';
import CartIcon from 'react-native-vector-icons/FontAwesome';
import LogOutIcon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';

const Header = props => {
  const [visible, setVisible] = useState(false);
  const openDrawer = () => {
    props.navigation.toggleDrawer();
  };

  const openProfileDrawer = () => {
    setVisible(!visible);
  };

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const data = [
    {
      title: 'Dashboard',
      styles: tw`text-sm text-gray-400 font-bold`,
      icon: <DashboardIcon name="dashboard" size={25} color="#b3b3b3" />,
      onPress: () => {
        props.navigation.navigate('Dashboard');
        setVisible(false);
      },
    },
    {
      title: 'Orders',
      styles: tw`text-sm text-gray-400 font-bold`,
      icon: <OrderIcon name="profile" size={25} color="#b3b3b3" />,
      onPress: () => {
        props.navigation.navigate('Orders');
        setVisible(false);
      },
    },
    {
      title: 'Profile',
      styles: tw`text-sm text-gray-400 font-bold`,
      icon: <ProfileIcon name="user" size={25} color="#b3b3b3" />,
      onPress: () => {
        props.navigation.navigate('Profile');
        setVisible(false);
      },
    },
    {
      title: 'Cart',
      styles: tw`text-sm text-gray-400 font-bold`,
      icon: <CartIcon name="shopping-cart" size={25} color="#b3b3b3" />,
      onPress: () => {
        props.navigation.navigate('Cart');
        setVisible(false);
      },
    },
    {
      title: 'Logout',
      styles: tw`text-sm text-gray-400 font-bold`,
      icon: <LogOutIcon name="logout" size={25} color="#b3b3b3" />,
      onPress: () => props.navigation.navigate('Dashboard'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <MenuIcon name="menu" size={25} onPress={() => openDrawer()} />
      </View>

      <Image source={require('../../images/logo.png')} style={styles.img} />

      <View style={styles.avatar}>
        <TouchableOpacity onPress={() => openProfileDrawer()}>
          <Avatar
            size={45}
            rounded
            source={require('../../images/Profile.png')}
          />
        </TouchableOpacity>
      </View>

      <Dialog
        isVisible={visible}
        animationType="fade"
        overlayStyle={styles.dialog}
        onBackdropPress={toggleDialog}>
        <View style={styles.mapContainer}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={item.onPress}>
              <View style={styles.mapContent}>
                <View style={styles.iconsContainer}>
                  <View style={styles.icons}>{item.icon}</View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Dialog>
    </View>
  );
};

export default Header;
