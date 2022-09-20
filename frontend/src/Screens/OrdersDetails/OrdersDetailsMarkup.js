import React from 'react';
import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';

const OrdersDetailsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Orders" />
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.orderTextContainer}>
            <Text style={styles.orderText}>
              Order #{props?.order && props?.order?._id}
            </Text>

            <View>
              <Text style={styles.shippingInfoHeading}>shipping Info</Text>
              <View style={styles.shippingInfo}>
                <Text style={styles.shippingInfoTitle}>Name : </Text>
                <Text style={styles.shippingInfoSubTitle}>
                  {props?.order && props?.order?.user?.name}
                </Text>
              </View>

              <View style={styles.shippingInfo}>
                <Text style={styles.shippingInfoTitle}>Phone : </Text>
                <Text style={styles.shippingInfoSubTitle}>
                  {props?.order && props?.order?.shippingInfo?.phoneNo}
                </Text>
              </View>

              <View style={styles.shippingInfo}>
                <Text style={styles.shippingInfoTitle}>Address : </Text>
                <Text style={styles.shippingInfoSubTitle}>
                  {props?.order?.shippingInfo &&
                    `${props?.order?.shippingInfo?.address}, ${props?.order?.shippingInfo?.city}, ${props?.order?.shippingInfo?.state}, ${props?.order?.shippingInfo?.country}, ${props?.order?.shippingInfo?.pinCode}`}
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.shippingInfoHeading}>Payment</Text>

              <View style={styles.shippingInfo}>
                <Text
                  style={[
                    styles.paidText,
                    props?.order?.paymentInfo?.status === 'succeeded'
                      ? {color: 'green'}
                      : {color: 'red'},
                  ]}>
                  {props?.order?.paymentInfo &&
                  props?.order?.paymentInfo?.status === 'succeeded'
                    ? 'PAID'
                    : 'NOT PAID'}
                </Text>
              </View>

              <View style={styles.shippingInfo}>
                <Text style={styles.shippingInfoTitle}>Amount : </Text>
                <Text style={styles.shippingInfoSubTitle}>
                  {props?.order && props?.order?.totalPrice}
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.shippingInfoHeading}>Order Status</Text>

              <View style={styles.shippingInfo}>
                <Text
                  style={[
                    styles.paidText,
                    props?.order?.ordersStatus === 'Processing'
                      ? {color: 'red'}
                      : {color: 'green'},
                  ]}>
                  {props?.order && props?.order?.ordersStatus}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View>
            <Text style={styles.orderItemsHeading}>Order Items :</Text>
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={props?.order && props.order.orderItems}
            renderItem={({item}) => (
              <View style={styles.orderItemsContainer}>
                <Image source={{uri: item.image}} style={styles.image} />
                <Text style={styles.nameText}>{item.name}</Text>

                <View style={styles.priceContainer}>
                  <Text style={styles.quantityAndPriceText}>
                    {item.quantity} X ₹{item.price} =
                    <Text style={styles.priceText}>
                      {' '}
                      ₹{item.price * item.quantity}{' '}
                    </Text>
                  </Text>
                </View>
              </View>
            )}
          />
        </View>

        <Footer {...props} />
      </ScrollView>
    </View>
  );
};

export default OrdersDetailsMarkup;
