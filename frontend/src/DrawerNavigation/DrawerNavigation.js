import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import SignUp from '../components/Authentication/SignUp/SignUp';
import SignIn from '../components/Authentication/SignIn/SignIn';
import Home from '../components/Screens/Home/Home';
import Products from '../components/Screens/Products/Products';
import Contact from '../components/Screens/Contact/Contact';
import About from '../components/Screens/About/About';
import tw from 'tailwind-react-native-classnames';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import CartPlusIcon from 'react-native-vector-icons/FontAwesome5';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import Dashboard from '../components/Screens/Dashboard/Dashboard';
import Orders from '../components/Screens/Orders/Orders';
import Profile from '../components/Screens/Profile/Profile';
import Cart from '../components/Screens/Cart/Cart';
import Search from '../components/Screens/Search/Search';
import {useSelector} from 'react-redux';
import ProductDetails from '../components/Screens/ProductDetails/ProductDetails';
import ShippingDetails from '../components/Screens/Cart/ShippingDetails/ShippingDetails';
import ConfirmOrder from '../components/Screens/Cart/ConfirmOrder/ConfirmOrder';
import Payment from '../components/Screens/Cart/Payment/Payment';

function CustomDrawerContent(props) {
  const {isAuthenticated} = useSelector(state => state.userRegister);

  let routeStartWord = props?.state?.history[1]?.key
    ? props?.state?.history[1]?.key[0] +
      props?.state?.history[1]?.key[1] +
      props?.state?.history[1]?.key[2] +
      props?.state?.history[1]?.key[3]
    : '';

  return (
    <DrawerContentScrollView {...props}>
      {isAuthenticated && (
        <View style={tw`flex-row flex-1 justify-around items-center pt-3`}>
          <TouchableOpacity
            style={tw`flex-row items-center p-2`}
            onPress={() => props.navigation.navigate('Search')}>
            <SearchIcon
              color={routeStartWord === 'Sear' ? 'lightblue' : 'black'}
              name="search1"
              size={25}
            />
            <Text
              style={[
                tw`pl-3`,
                routeStartWord === 'Sear' && tw`text-blue-400`,
              ]}>
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center p-2`}
            onPress={() => props.navigation.navigate('Cart')}>
            <CartPlusIcon
              color={routeStartWord === 'Cart' ? 'lightblue' : 'black'}
              name="cart-plus"
              size={25}
            />
            <Text
              style={[
                tw`pl-3`,
                routeStartWord === 'Cart' && tw`text-blue-400`,
              ]}>
              Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center p-2`}
            onPress={() => props.navigation.navigate('Profile')}>
            <UserIcon
              color={routeStartWord === 'Prof' ? 'lightblue' : 'black'}
              name="user-circle"
              size={27}
            />
            <Text
              style={[
                tw`pl-3`,
                routeStartWord === 'Prof' && tw`text-blue-400`,
              ]}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const {isAuthenticated} = useSelector(state => state.userRegister);
  const hideContentInDrawer = () => {
    return {
      drawerItemStyle: {height: 0},
      drawerLabel: () => null,
      title: null,
      drawerIcon: () => null,
    };
  };

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {!isAuthenticated && (
        <Drawer.Screen
          name="SignIn"
          component={SignIn}
          options={hideContentInDrawer()}
        />
      )}
      {!isAuthenticated && (
        <Drawer.Screen
          name="SignUp"
          component={SignUp}
          options={hideContentInDrawer()}
        />
      )}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen
        name="Dashboard"
        options={hideContentInDrawer()}
        component={Dashboard}
      />
      <Drawer.Screen
        name="Orders"
        options={hideContentInDrawer()}
        component={Orders}
      />
      <Drawer.Screen
        name="Profile"
        options={hideContentInDrawer()}
        component={Profile}
      />
      <Drawer.Screen
        name="Cart"
        options={hideContentInDrawer()}
        component={Cart}
      />
      <Drawer.Screen
        name="Search"
        options={hideContentInDrawer()}
        component={Search}
      />
      <Drawer.Screen
        name="ProductDetails"
        options={hideContentInDrawer()}
        component={ProductDetails}
      />
      <Drawer.Screen
        name="ShippingDetails"
        options={hideContentInDrawer()}
        component={ShippingDetails}
      />
      <Drawer.Screen
        name="ConfirmOrder"
        options={hideContentInDrawer()}
        component={ConfirmOrder}
      />
      <Drawer.Screen
        name="Payment"
        options={hideContentInDrawer()}
        component={Payment}
      />
    </Drawer.Navigator>
  );
};

export const DrawerNavigation = props => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};
