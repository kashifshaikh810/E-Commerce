import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import SignUp from '../components/Authentication/SignUp/SignUp';
import SignIn from '../components/Authentication/SignIn/SignIn';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{
          drawerContentContainerStyle: {height: 0, padding: 0},
          drawerLabel: () => null,
          title: null,
          drawerActiveBackgroundColor: '#fff',
        }}
      />
      <Drawer.Screen name="SignUp" component={SignUp} />
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
