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
  const {cartItems, shippingInfo} = useSelector(state => state.cart);

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

  console.log(cartItems, 'cartItems');
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
                {shippingInfo && shippingInfo.phoneNumber}
              </Text>
            </View>

            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>Address :</Text>
              <Text style={styles.shippingSubTitle}>
                {shippingInfo &&
                  `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.country}, ${shippingInfo.pinCode}`}
              </Text>
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
                <Text style={styles.subTitle}>₹36000</Text>
              </View>
            </View>

            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>Shipping Charges :</Text>
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>₹36000</Text>
              </View>
            </View>

            <View
              style={[styles.shippingAreaContainer, styles.paddingBottomNone]}>
              <Text style={styles.shippingTitle}>GST :</Text>
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>₹36000</Text>
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
              <Text style={styles.numOfTotal}>₹36000</Text>
            </View>
          </View>

          <View>
            <MyButton
              title="Proceed To Payment"
              size="lg"
              buttonStyle={styles.buttonStyle}
              onPress={() => props.navigation.navigate('Payment')}
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
