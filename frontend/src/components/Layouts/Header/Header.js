import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './HeaderStyles';
import {Dialog, Avatar} from '@rneui/themed';

// icons
import MenuIcon from 'react-native-vector-icons/Feather';
import BackIcon from 'react-native-vector-icons/Ionicons';
import DashboardIcon from 'react-native-vector-icons/MaterialIcons';
import OrderIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/FontAwesome5';
import CartIcon from 'react-native-vector-icons/FontAwesome';
import LogOutIcon from 'react-native-vector-icons/MaterialIcons';
import tw from 'tailwind-react-native-classnames';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {logOut} from '../../../redux/actions/userAction';
import {getCart} from '../../../redux/actions/cartAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalLoader from '../ModalLoader/ModalLoader';
import {getMyOrders} from '../../../redux/actions/ordersAction';

const Header = props => {
  const [visible, setVisible] = useState(false);
  const [routeName, setRouteName] = useState('');
  const {loading, isAuthenticated, user} = useSelector(
    state => state.userRegister,
  );
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const route = useRoute();

  const openDrawer = () => {
    props.navigation.toggleDrawer();
  };

  const openProfileDrawer = () => {
    setVisible(!visible);
  };

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const logOutUser = () => {
    dispatch(logOut());
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
        dispatch(getMyOrders());
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
      icon: (
        <CartIcon
          name="shopping-cart"
          size={25}
          color={cartItems.length === 0 ? '#b3b3b3' : 'tomato'}
        />
      ),
      onPress: () => {
        props.navigation.navigate('Cart');
        setVisible(false);
      },
    },
    {
      title: 'Logout',
      styles: tw`text-sm text-gray-400 font-bold`,
      icon: <LogOutIcon name="logout" size={25} color="#b3b3b3" />,
      onPress: () => logOutUser(),
    },
    {
      title: 'Close',
      styles: tw`text-sm text-gray-400 font-bold`,
      icon: <OrderIcon name="closecircle" size={25} color="#b3b3b3" />,
      onPress: () => setVisible(false),
    },
  ];

  useEffect(() => {
    getCartItemsData();

    if (isAuthenticated === false) {
      props.navigation.navigate('SignIn');
      setVisible(false);
    }
  }, [isAuthenticated]);

  const getCartItemsData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem('cartItems');
      const res = jsonValue != null ? JSON.parse(jsonValue) : null;
      dispatch(getCart(res));
    } catch (e) {
      console.log(e, 'err');
    }
  };

  useEffect(() => {
    setRouteName(route.name);
  }, [route, props.navigation]);

  const renderIcon = () => {
    if (
      routeName === 'Home' ||
      routeName === 'Products' ||
      routeName === 'Search' ||
      routeName === 'Profile' ||
      routeName === 'Cart' ||
      routeName === 'Contact' ||
      routeName === 'About' ||
      routeName === 'SignIn' ||
      routeName === 'SignUp'
    ) {
      return <MenuIcon name="menu" size={25} onPress={() => openDrawer()} />;
    } else {
      return (
        <BackIcon
          name="arrow-back"
          size={25}
          onPress={() =>
            props.navigation.navigate(
              props?.route?.params?.isMyRoute ? 'Home' : props.backRouteName,
            )
          }
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>{renderIcon()}</View>

      <Image source={require('../../images/logo.png')} style={styles.img} />

      {user !== null && (
        <View style={styles.avatar}>
          <TouchableOpacity onPress={() => openProfileDrawer()}>
            <Avatar size={45} rounded source={{uri: user?.avatar?.url}} />
          </TouchableOpacity>
        </View>
      )}

      {user === null && (
        <View style={styles.avatar}>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
            <Text>SignIn</Text>
          </TouchableOpacity>
        </View>
      )}

      <Dialog
        isVisible={visible}
        animationType="fade"
        overlayStyle={styles.dialog}
        onBackdropPress={toggleDialog}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={item.onPress}
            style={styles.touchableOpacity}>
            <View style={styles.mapContent}>
              <View style={styles.iconsContainer}>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>
                    {item.title}{' '}
                    {item.title === 'Cart' && `(${cartItems.length})`}
                  </Text>
                </View>
                <View style={item.title !== 'Profile' && styles.icons}>
                  {item.title === 'Profile' ? null : item.icon}
                  {item.title === 'Profile' && (
                    <Image
                      source={{uri: user?.avatar?.url}}
                      style={{width: 50, height: 50, borderRadius: 25}}
                    />
                  )}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </Dialog>

      <ModalLoader
        {...props}
        isVisible={props.loading ? props.loading : loading}
      />
    </View>
  );
};

export default Header;
