import React, {useEffect} from 'react';
import {View, Text, TextInput, ScrollView, BackHandler} from 'react-native';
import Footer from '../../../components/Layouts/Footer/Footer';
import Header from '../../../components/Layouts/Header/Header';
import Progress from '../Progress';
import styles from './styles';
import CreditCardIcon from 'react-native-vector-icons/Feather';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import KeyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyButton from '../../../components/Layouts/Button/Button';

const Payment = props => {
  function handleBackButtonClick() {
    props.navigation.navigate('ConfirmOrder');
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
      <Header {...props} backRouteName="ConfirmOrder" />

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
            <TextInput placeholder="" style={styles.textInput} />
          </View>

          <View>
            <EventIcon
              name="event"
              size={20}
              color="black"
              style={styles.icon}
            />
            <TextInput placeholder="" style={styles.textInput} />
          </View>

          <View>
            <KeyIcon name="key" size={20} color="black" style={styles.icon} />
            <TextInput placeholder="" style={styles.textInput} />
          </View>

          <View>
            <MyButton
              title="Pay -"
              size="lg"
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                // props.navigation.navigate('ConfirmOrder')
              }}
            />
          </View>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default Payment;
