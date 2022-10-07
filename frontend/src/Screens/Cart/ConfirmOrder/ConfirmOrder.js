import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  BackHandler,
} from 'react-native';
import {useSelector} from 'react-redux';
import MyButton from '../../../components/Layouts/Button/Button';
import Footer from '../../../components/Layouts/Footer/Footer';
import Header from '../../../components/Layouts/Header/Header';
import Progress from '../Progress';
import styles from './styles';

const ConfirmOrder = props => {
  const {user} = useSelector(state => state.userRegister);
  const {cartItems} = useSelector(state => state.cart);
  const {shippingDetailsData} = useSelector(state => state.shipping);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  const shippingCharges = subTotal > 1000 ? 0 : 200;

  const tax = subTotal * 0.18;

  const totalPrice = subTotal + shippingCharges + tax;

  const address = `${shippingDetailsData?.address}, ${shippingDetailsData?.city}, ${shippingDetailsData?.state}, ${shippingDetailsData?.country}, ${shippingDetailsData?.pinCode}`;

  const proceedToPayment = () => {
    const data = {
      subTotal,
      tax,
      shippingCharges,
      totalPrice,
    };

    AsyncStorage.setItem('orderInfo', JSON.stringify(data));
    props.navigation.navigate('Payment', {
      runUseEffect: true,
      creaditCard: '1234 1234 1234 1234',
      event: 'MM/YY',
      key: 'CVC',
    });
  };

  function handleBackButtonClick() {
    props.navigation.navigate('ShippingDetails');
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, [props.navigation, handleBackButtonClick]);

  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="ShippingDetails" />

      <Progress activeStep={1} />
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.shippingText}>Shipping Info</Text>

          <View style={styles.shippingAreaMain}>
            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>Name :</Text>
              <Text style={styles.shippingSubTitle}>{user && user?.name}</Text>
            </View>

            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>Phone :</Text>
              <Text style={styles.shippingSubTitle}>
                {shippingDetailsData && shippingDetailsData?.phoneNo}
              </Text>
            </View>

            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>Address :</Text>
              <Text style={styles.shippingSubTitle}>{address}</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.orderSummaryContainer}>
            <Text style={styles.orderSummaryText}>Order Summary</Text>
          </View>

          <View style={styles.shippingAreaMain}>
            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>SubTotal :</Text>
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>₹{subTotal}</Text>
              </View>
            </View>

            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>Shipping Charges :</Text>
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>₹{shippingCharges}</Text>
              </View>
            </View>

            <View
              style={[styles.shippingAreaContainer, styles.paddingBottomNone]}>
              <Text style={styles.shippingTitle}>GST :</Text>
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>₹{tax}</Text>
              </View>
            </View>
          </View>

          <View style={[styles.orderSummaryContainer, styles.paddingTop]} />

          <View
            style={[
              styles.shippingAreaContainer,
              styles.shippingAreaMain,
              styles.paddingBottomNone,
            ]}>
            <Text style={styles.totalText}>Total :</Text>
            <View style={styles.subTitleContainer}>
              <Text style={styles.numOfTotal}>₹{totalPrice}</Text>
            </View>
          </View>

          <View>
            <MyButton
              title="Proceed To Payment"
              size="lg"
              buttonStyle={styles.buttonStyle}
              onPress={() => proceedToPayment()}
            />
          </View>
        </View>

        <View>
          <Text style={styles.shippingText}>Your Cart Items</Text>

          <FlatList
            keyExtractor={(item, index) => `key-${index}`}
            data={cartItems}
            renderItem={({item, index}) => (
              <View style={styles.flatListContent}>
                <Image source={{uri: item.image}} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.subTitleContainer}>
                  <Text>
                    {item.quantity} X ₹{item.price} = ₹
                    {item.price * item.quantity}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default ConfirmOrder;
