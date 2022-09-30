import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import SignUp from '../Authentication/SignUp/SignUp';
import SignIn from '../Authentication/SignIn/SignIn';
import Home from '../Screens/Home/Home';
import Products from '../Screens/Products/Products';
import Contact from '../Screens/Contact/Contact';
import About from '../Screens/About/About';
import tw from 'tailwind-react-native-classnames';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import CartPlusIcon from 'react-native-vector-icons/FontAwesome5';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import Dashboard from '../Screens/Admin/Dashboard/Dashboard';
import Orders from '../Screens/Orders/Orders';
import Profile from '../Screens/Profile/Profile';
import Cart from '../Screens/Cart/Cart';
import Search from '../Screens/Search/Search';
import {useSelector} from 'react-redux';
import ProductDetails from '../Screens/ProductDetails/ProductDetails';
import ShippingDetails from '../Screens/Cart/ShippingDetails/ShippingDetails';
import ConfirmOrder from '../Screens/Cart/ConfirmOrder/ConfirmOrder';
import Payment from '../Screens/Cart/Payment/Payment';
import EditProfile from '../Screens/EditProfile/EditProfile';
import ChangePassword from '../Screens/ChangePassword/ChangePassword';
import OrdersDetails from '../Screens/OrdersDetails/OrdersDetails';
import Success from '../Screens/Cart/Success';
import AllOrders from '../Screens/Admin/AllOrders/AllOrders';
import AllProducts from '../Screens/Admin/AllProducts/AllProducts';
import CreateProduct from '../Screens/Admin/CreateProduct/CreateProduct';
import AllReviews from '../Screens/Admin/AllReviews/AllReviews';
import AllUsers from '../Screens/Admin/AllUsers/AllUsers';
import UpdateProduct from '../Screens/Admin/UpdateProduct/UpdateProduct';
import AdminOrdersDetails from '../Screens/Admin/AdminOrdersDetails/AdminOrdersDetails';
import UpdateUser from '../Screens/Admin/UpdateUser/UpdateUser';

function CustomDrawerContent(props) {
  const {user} = useSelector(state => state.userRegister);

  let routeStartWord = props?.state?.history[1]?.key
    ? props?.state?.history[1]?.key[0] +
      props?.state?.history[1]?.key[1] +
      props?.state?.history[1]?.key[2] +
      props?.state?.history[1]?.key[3]
    : '';

  return (
    <DrawerContentScrollView {...props}>
      {user !== null && (
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
  const {isAuthenticated, user} = useSelector(state => state.userRegister);
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
      {isAuthenticated === false && (
        <Drawer.Screen
          name="SignIn"
          component={SignIn}
          options={hideContentInDrawer()}
        />
      )}
      {isAuthenticated === false && (
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
      {user?.role === 'admin' && (
        <Drawer.Screen
          name="Dashboard"
          options={hideContentInDrawer()}
          component={Dashboard}
        />
      )}
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
      <Drawer.Screen
        name="EditProfile"
        options={hideContentInDrawer()}
        component={EditProfile}
      />
      <Drawer.Screen
        name="ChangePassword"
        options={hideContentInDrawer()}
        component={ChangePassword}
      />
      <Drawer.Screen
        name="OrdersDetails"
        options={hideContentInDrawer()}
        component={OrdersDetails}
      />
      <Drawer.Screen
        name="Success"
        options={hideContentInDrawer()}
        component={Success}
      />
      <Drawer.Screen
        name="AllOrders"
        options={hideContentInDrawer()}
        component={AllOrders}
      />
      <Drawer.Screen
        name="AllProducts"
        options={hideContentInDrawer()}
        component={AllProducts}
      />
      <Drawer.Screen
        name="CreateProduct"
        options={hideContentInDrawer()}
        component={CreateProduct}
      />
      <Drawer.Screen
        name="AllReviews"
        options={hideContentInDrawer()}
        component={AllReviews}
      />
      <Drawer.Screen
        name="AllUsers"
        options={hideContentInDrawer()}
        component={AllUsers}
      />
      <Drawer.Screen
        name="UpdateProduct"
        options={hideContentInDrawer()}
        component={UpdateProduct}
      />
      <Drawer.Screen
        name="AdminOrdersDetails"
        options={hideContentInDrawer()}
        component={AdminOrdersDetails}
      />
      <Drawer.Screen
        name="UpdateUser"
        options={hideContentInDrawer()}
        component={UpdateUser}
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
