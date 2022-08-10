import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {getProduct} from './src/redux/actions/productAction';
import store from './src/redux/Store';
import tw from 'tailwind-react-native-classnames';
import Navigation from './src/navigation/Navigation';

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
      <Navigation {...props} />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
