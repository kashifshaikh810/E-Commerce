import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Lottie from 'lottie-react-native';
import MyButton from '../../components/Layouts/Button/Button';
import {useDispatch} from 'react-redux';
import {getMyOrders} from '../../redux/actions/ordersAction';
import {Dialog} from '@rneui/themed';

const Success = props => {
  const dispatch = useDispatch();

  const viewOrders = () => {
    dispatch(getMyOrders());
    props.navigation.navigate('Orders');
    props.setModalVisible(false);
  };
  // <View style={styles.container}>

  //   <TouchableOpacity
  //     onPress={() => viewOrders()}
  //     style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <Text>click</Text>
  //   </TouchableOpacity>
  // </View>

  return (
    <Dialog
      isVisible={props?.visible}
      animationType="fade"
      overlayStyle={styles.loadingDialog}
      backdropStyle={{backgroundColor: 'rgba(0,0,0,0.250)'}}>
      <View style={styles.container}>
        <Lottie
          source={require('../../components/images/29390-your-order-is-confirmed.json')}
          autoPlay
          loop
          style={styles.lottie}
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
    </Dialog>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center items-center`,
  buttonStyleContainer: tw`flex-1`,
  lottie: tw`h-96 w-full`,
  buttonStyle: tw`bg-red-400 w-11/12 self-center mb-10`,
  loadingDialog: tw`flex-1 w-full bg-gray-200 bg-white`,
  loadingText: tw`text-2xl uppercase text-gray-400`,
  bgTransparent: tw`bg-transparent`,
});
