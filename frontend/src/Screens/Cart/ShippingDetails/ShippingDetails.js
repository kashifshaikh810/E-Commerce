import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  BackHandler,
  Platform,
} from 'react-native';
import Header from '../../../components/Layouts/Header/Header';
import Footer from '../../../components/Layouts/Footer/Footer';
import styles from './styles';
import Progress from '../Progress';
import HomeIcon from 'react-native-vector-icons/Entypo';
import CityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneIcon from 'react-native-vector-icons/FontAwesome';
import EarthIcon from 'react-native-vector-icons/Fontisto';
import ManIcon from 'react-native-vector-icons/Entypo';
import {Picker} from '@react-native-picker/picker';
import {
  getAllCountries,
  getAllStates,
} from '../../../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux';
import MyButton from '../../../components/Layouts/Button/Button';
import {saveShippingInfo} from '../../../redux/actions/cartAction';

const ShippingDetails = props => {
  const dispatch = useDispatch();
  const {country, state} = useSelector(state => state.getCountries);
  let shippingInfoData = props?.route?.params?.shippingData;
  const [countryVal, setCountryVal] = useState(shippingInfoData?.country);
  const [stateVal, setStateVal] = useState(shippingInfoData?.state);
  const [address, setAddress] = useState(shippingInfoData?.address);
  const [city, setCity] = useState(shippingInfoData?.city);
  const [pinCode, setPinCode] = useState(shippingInfoData?.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfoData?.phoneNo);

  useEffect(() => {
    dispatch(getAllCountries());
    if (countryVal) {
      dispatch(getAllStates(countryVal));
    }
  }, [dispatch, countryVal]);

  function handleBackButtonClick() {
    props.navigation.navigate('Cart');
    return true;
  }

  const continuePressHandler = () => {
    if (address && city && pinCode && phoneNo) {
      dispatch(
        saveShippingInfo({
          address: address,
          city: city,
          pinCode: pinCode,
          phoneNo: phoneNo,
          country: countryVal,
          state: stateVal,
        }),
      );
      props.navigation.navigate('ConfirmOrder');
    }
  };

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
      <Header {...props} backRouteName="Cart" />
      <Progress activeStep={0} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.shippingDetailsTextContainer}>
          <Text style={styles.shippingDetailsText}>Shipping Details</Text>
        </View>

        <View>
          <HomeIcon name="home" size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="Address"
            style={styles.textInput}
            value={address}
            onChangeText={text => setAddress(text)}
            maxLength={15}
          />
        </View>

        <View>
          <CityIcon name="city" size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="City"
            style={styles.textInput}
            value={city}
            onChangeText={text => setCity(text)}
            maxLength={15}
          />
        </View>

        <View>
          <HomeIcon
            name="location"
            size={20}
            color="black"
            style={styles.icon}
          />
          <TextInput
            placeholder="Pin Code"
            keyboardType="numeric"
            style={styles.textInput}
            value={pinCode}
            onChangeText={text => setPinCode(text)}
            maxLength={6}
          />
        </View>

        <View>
          <PhoneIcon name="phone" size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            keyboardType="numeric"
            style={styles.textInput}
            value={phoneNo}
            onChangeText={text => setPhoneNo(text)}
            maxLength={11}
          />
        </View>

        <View style={[Platform.OS === 'android' && styles.picker]}>
          <EarthIcon
            name="earth"
            size={20}
            color="black"
            style={Platform.OS === 'ios' ? styles.iOSIconTwo : styles.iconTwo}
          />
          <Picker
            selectedValue={countryVal}
            onValueChange={(itemValue, itemIndex) => setCountryVal(itemValue)}
            mode="dropdown">
            <Picker.Item label="Country" value="" />
            {country &&
              country.map((item, index) => (
                <Picker.Item
                  key={item.isoCode}
                  label={item.name}
                  value={item.isoCode}
                />
              ))}
          </Picker>
        </View>

        {countryVal && (
          <View style={[Platform.OS === 'android' && styles.picker]}>
            <ManIcon
              name="man"
              size={20}
              color="black"
              style={Platform.OS === 'ios' ? styles.iOSIconTwo : styles.iconTwo}
            />
            <Picker
              selectedValue={stateVal}
              onValueChange={(itemValue, itemIndex) => setStateVal(itemValue)}
              mode="dropdown">
              <Picker.Item label="State" value="" />
              {state &&
                state.map((item, index) => (
                  <Picker.Item
                    key={item.isoCode}
                    label={item.name}
                    value={item.isoCode}
                  />
                ))}
            </Picker>
          </View>
        )}

        <View>
          <MyButton
            title="Continue"
            size="lg"
            buttonStyle={styles.buttonStyle}
            onPress={() => continuePressHandler()}
          />
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default ShippingDetails;
