import React from 'react';
import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import MyButton from '../../../Layouts/Button/Button';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Progress from '../Progress';
import styles from './styles';

const ConfirmOrder = props => {
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
              <Text style={styles.shippingSubTitle}>Muhammad KAshif</Text>
            </View>

            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>Phone :</Text>
              <Text style={styles.shippingSubTitle}>03142439553</Text>
            </View>

            <View style={styles.shippingAreaContainer}>
              <Text style={styles.shippingTitle}>Address :</Text>
              <Text style={styles.shippingSubTitle}>
                Karachi, New Karachi, 04, ZM, 3231312
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
            keyExtractor={(item, index) => index.toString()}
            data={[
              {
                image: require('../../../images/cover.jpg'),
                name: 'Mobile',
                price: 4221,
                quantity: 10,
              },
              {
                image: require('../../../images/cover.jpg'),
                name: 'Laptop',
                price: 2413,
                quantity: 6,
              },
              {
                image: require('../../../images/cover.jpg'),
                name: 'VIvo',
                price: 5422,
                quantity: 4,
              },
            ]}
            renderItem={({item, index}) => (
              <View style={styles.flatListContent}>
                <Image source={item.image} style={styles.image} />
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
