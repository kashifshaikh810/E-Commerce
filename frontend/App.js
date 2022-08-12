import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {getProduct} from './src/redux/actions/productAction';
import store from './src/redux/Store';
import tw from 'tailwind-react-native-classnames';
import {DrawerNavigation} from './src/DrawerNavigation/DrawerNavigation';
import FlashMessage from 'react-native-flash-message';

export const Main = () => {
  const dispatch = useDispatch();

  const {loading, products, error} = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log(products);

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>main</Text>
    </View>
  );
};

const App = props => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <DrawerNavigation />
      <FlashMessage position={'top'} floating hideStatusBar />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
