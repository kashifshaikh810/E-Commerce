import React from 'react';
import {View, Text, ScrollView, FlatList, Image, Platform} from 'react-native';
import styles from './styles';
import Header from '../../../components/Layouts/Header/Header';
import MyButton from '../../../components/Layouts/Button/Button';
import {Picker} from '@react-native-picker/picker';
import AccountTreeIcon from 'react-native-vector-icons/MaterialIcons';

const AdminOrdersDetailsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="AllOrders" />
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
                    props?.order?.ordersStatus === 'Shipped' && {color: 'red'},
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

          <View style={styles.divider} />

          <View style={styles.processContainer}>
            <View style={styles.processMain}>
              <Text style={styles.processText}>Process Order</Text>
            </View>
            <View style={[Platform.OS === 'android' && styles.picker]}>
              <AccountTreeIcon
                name="account-tree"
                size={20}
                color="black"
                style={
                  Platform.OS === 'ios' ? styles.iOSIconTwo : styles.iconTwo
                }
              />
              <Picker
                selectedValue=""
                onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
                mode="dropdown">
                <Picker.Item label="Choose Category" value="" />
                <Picker.Item label="Shipped" value="Shipped" />
                {props?.order?.ordersStatus === 'Shipped' && (
                  <Picker.Item label="Delivered" value="Delivered" />
                )}
              </Picker>
            </View>

            <View>
              <MyButton
                title="PROCESS"
                size="lg"
                buttonStyle={styles.buttonStyle}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdminOrdersDetailsMarkup;
