import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, BackHandler} from 'react-native';
import Footer from '../../../components/Layouts/Footer/Footer';
import Header from '../../../components/Layouts/Header/Header';
import Progress from '../Progress';
import styles from './styles';
import CreditCardIcon from 'react-native-vector-icons/Feather';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import KeyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyButton from '../../../components/Layouts/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {clearErrors, createNewOrder} from '../../../redux/actions/ordersAction';
import {showMessage} from 'react-native-flash-message';
import Success from '../Success';

const Payment = props => {
  const [orderInfoData, setOrderInfoData] = useState({});
  const [cartNo, setCartNo] = useState('');
  const [cartMonthAndYear, setCartMonthAndYear] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [cartCVC, setCartCVC] = useState('');
  let params = props?.route?.params;

  const {loading, order, error} = useSelector(state => state.newOrder);
  const {cartItems, shippingInfo} = useSelector(state => state.cart);
  const {user} = useSelector(state => state.userRegister);
  const dispatch = useDispatch();

  const orderData = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfoData.subtotal,
    taxPrice: orderInfoData.tax,
    shippingPrice: orderInfoData.shippingCharges,
    totalPrice: orderInfoData.totalPrice,
    paymentInfo: {id: user._id, status: 'succeeded'},
  };

  const proceedToPay = () => {
    dispatch(createNewOrder(orderData));
  };

  function handleBackButtonClick() {
    props.navigation.navigate('ConfirmOrder');
    return true;
  }

  useEffect(() => {
    getOrderInfoData();

    if (error) {
      showMessage({
        message: 'Error',
        description: error,
        type: 'danger',
      });
      dispatch(clearErrors());
    }

    if (order) {
      // props.navigation.navigate('Success');
      setModalVisible(true);
    }

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, [
    props.navigation,
    handleBackButtonClick,
    params?.runUseEffect,
    error,
    order,
  ]);

  const getOrderInfoData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem('orderInfo');
      const res = jsonValue != null ? JSON.parse(jsonValue) : {};
      if (res !== null) {
        setOrderInfoData(res);
      }
    } catch (e) {
      console.log(e, 'err');
    }
  };

  return (
    <View style={styles.container}>
      <Header {...props} loading={loading} backRouteName="ConfirmOrder" />

      <Progress activeStep={2} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.cardInfoText}>Card Info</Text>
          </View>

          <View>
            <CreditCardIcon
              name="credit-card"
              size={20}
              color="black"
              style={styles.icon}
            />
            <TextInput
              placeholder={params?.creaditCard}
              style={styles.textInput}
              maxLength={19}
              value={cartNo}
              onChangeText={text => setCartNo(text)}
            />
          </View>

          <View>
            <EventIcon
              name="event"
              size={20}
              color="black"
              style={styles.icon}
            />
            <TextInput
              placeholder={params?.event}
              style={styles.textInput}
              maxLength={4}
              value={cartMonthAndYear}
              onChangeText={text => setCartMonthAndYear(text)}
            />
          </View>

          <View>
            <KeyIcon name="key" size={20} color="black" style={styles.icon} />
            <TextInput
              placeholder={params?.key}
              style={styles.textInput}
              maxLength={3}
              value={cartCVC}
              onChangeText={text => setCartCVC(text)}
            />
          </View>

          <View>
            <MyButton
              title={`Pay - ₹${orderInfoData && orderInfoData?.totalPrice}`}
              size="lg"
              disabled={!cartCVC || !cartNo || !cartMonthAndYear}
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                proceedToPay();
              }}
              {...props}
              loading={loading}
            />
          </View>
          <Success
            {...props}
            visible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default Payment;
