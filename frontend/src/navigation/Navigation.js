import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../components/Authentication/SignIn/SignIn';
import SignUp from '../components/Authentication/SignUp/SignUp';
import Header from '../components/Layouts/Header/Header';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
