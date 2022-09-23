import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Lottie from 'lottie-react-native';
import MyButton from '../../components/Layouts/Button/Button';
import {useDispatch} from 'react-redux';
import {getMyOrders} from '../../redux/actions/ordersAction';

const Success = props => {
  const dispatch = useDispatch();

  const viewOrders = () => {
    dispatch(getMyOrders());
    props.navigation.navigate('Orders');
  };

  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../components/images/29390-your-order-is-confirmed.json')}
        autoPlay
        loop
      />
      <View style={styles.buttonStyleContainer}>
        <MyButton
          title="View Your Orders"
          size="lg"
          buttonStyle={styles.buttonStyle}
          onPress={() => viewOrders()}
        />
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center`,
  buttonStyleContainer: tw`flex-1 justify-end`,
  buttonStyle: tw`bg-red-400 w-11/12 self-center mb-10`,
});
