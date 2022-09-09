import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, ScrollView, FlatList} from 'react-native';
import Header from '../../../Layouts/Header/Header';
import Footer from '../../../Layouts/Footer/Footer';
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
} from '../../../../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux';
import MyButton from '../../../Layouts/Button/Button';

const ShippingDetails = props => {
  const dispatch = useDispatch();
  const {country, state} = useSelector(state => state.getCountries);
  const [countryVal, setCountryVal] = useState('');
  const [stateVal, setStateVal] = useState('');

  useEffect(() => {
    // dispatch(getAllCountries());
    // if (countryVal) {
    //   dispatch(getAllStates(countryVal));
    // }
  }, [dispatch, countryVal]);

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
          <TextInput placeholder="Address" style={styles.textInput} />
        </View>

        <View>
          <CityIcon name="city" size={20} color="black" style={styles.icon} />
          <TextInput placeholder="City" style={styles.textInput} />
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
          />
        </View>

        <View>
          <PhoneIcon name="phone" size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            keyboardType="numeric"
            style={styles.textInput}
          />
        </View>

        <View style={[styles.picker]}>
          <EarthIcon
            name="earth"
            size={20}
            color="black"
            style={styles.iconTwo}
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
          <View style={[styles.picker]}>
            <ManIcon
              name="man"
              size={20}
              color="black"
              style={styles.iconTwo}
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
            onPress={() => props.navigation.navigate('ConfirmOrder')}
          />
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default ShippingDetails;
