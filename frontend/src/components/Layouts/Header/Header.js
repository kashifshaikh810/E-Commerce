import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './HeaderStyles';

// icons
import MenuIcon from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import CartPlusIcon from 'react-native-vector-icons/FontAwesome5';
import UserIcon from 'react-native-vector-icons/FontAwesome5';

const Header = props => {
  const openDrawer = () => {
    props.navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <MenuIcon name="menu" size={25} onPress={() => openDrawer()} />
      </View>

      <Image source={require('../../images/logo.png')} style={styles.img} />

      <View style={styles.iconsContainer}>
        <SearchIcon
          name="search1"
          style={styles.paddingLeft}
          size={25}
          onPress={() => {}}
        />
        <CartPlusIcon
          name="cart-plus"
          style={styles.paddingLeft}
          size={25}
          onPress={() => {}}
        />
        <UserIcon
          name="user-circle"
          style={styles.paddingLeft}
          size={27}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Header;
