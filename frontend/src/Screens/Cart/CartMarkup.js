import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Header from '../../components/Layouts/Header/Header';
import styles from './styles';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import RemoveCartIcon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../../components/Layouts/Button/Button';
import Footer from '../../components/Layouts/Footer/Footer';

const CartMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      {props?.cartItems?.length >= 1 ? (
        <ScrollView style={styles.scrollView}>
          <View style={styles.tableHeader}>
            <Text style={styles.headingText}>Product</Text>
            <Text style={styles.headingText}>Quantity</Text>
            <Text style={styles.headingText}>Subtotal</Text>
          </View>
          <FlatList
            refreshControl={
              <RefreshControl
                onRefresh={props.onRefresh}
                refreshing={props.refreshing}
              />
            }
            data={props?.cartItems}
            keyExtractor={(item, index) => `key-${index}`}
            renderItem={({item, index}) => (
              <>
                <View
                  style={
                    props?.cartItems?.length > 1
                      ? styles.tableContentTwo
                      : styles.tableContent
                  }>
                  <View style={styles.productContainer}>
                    <Image source={{uri: item.image}} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>Price: ₹{item.price}</Text>
                    <TouchableOpacity
                      onPress={() => props.removeCartHandler(item.product)}>
                      <Text style={styles.removeText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.buttonAndQuantityContainer}>
                    <View>
                      <MyButton
                        title={
                          <MinusIcon name="minus" size={20} color="#FFF" />
                        }
                        buttonStyle={styles.buttonStyle}
                        onPress={() =>
                          props.decreaseQuantity(item.product, item.quantity)
                        }
                      />
                    </View>
                    <View>
                      <Text
                        style={[
                          props.orientation === 'portrait'
                            ? styles.numOfQuantity
                            : styles.numOfQuantityTwo,
                          item.quantity >= 10 && {marginHorizontal: -6},
                        ]}>
                        {item.quantity}
                      </Text>
                    </View>
                    <View>
                      <MyButton
                        title={<MinusIcon name="plus" size={20} color="#FFF" />}
                        buttonStyle={styles.buttonStyle}
                        onPress={() =>
                          props.increaseQuantity(
                            item.product,
                            item.quantity,
                            item.stock,
                          )
                        }
                      />
                    </View>
                  </View>
                  <Text style={styles.price}>{`₹${
                    item.price * item.quantity
                  }`}</Text>
                </View>
              </>
            )}
          />
          <View style={styles.dividerLine} />
          <View style={styles.totalContainer}>
            <View style={styles.grossTotalContainer}>
              <Text style={styles.grossTotalText}>Gross Total</Text>
              <Text style={styles.grossTotalText}>{`₹${props?.cartItems?.reduce(
                (acc, item) => acc + item?.quantity * item?.price,
                0,
              )}`}</Text>
            </View>

            <MyButton
              title="Check Out"
              size="lg"
              buttonStyle={styles.checkOutButtonStyle}
              onPress={() => props.checkOutPressHandler()}
            />
          </View>

          <Footer />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <RemoveCartIcon
            name="remove-shopping-cart"
            size={100}
            color="tomato"
          />
          <Text style={styles.grossTotalText}>No Items In Your Cart</Text>
          <MyButton
            title="View Products"
            size="lg"
            buttonStyle={styles.checkOutButtonStyle}
            onPress={() => props.navigation.navigate('Home')}
          />
        </View>
      )}
      {props?.cartItems?.length === 0 && <Footer style={styles.height} />}
    </View>
  );
};

export default CartMarkup;
