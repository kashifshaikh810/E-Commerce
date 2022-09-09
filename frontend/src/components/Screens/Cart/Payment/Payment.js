import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Footer from '../../../Layouts/Footer/Footer';
import Header from '../../../Layouts/Header/Header';
import Progress from '../Progress';
import styles from './styles';
import CreditCardIcon from 'react-native-vector-icons/Feather';
import EventIcon from 'react-native-vector-icons/MaterialIcons';
import KeyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MyButton from '../../../Layouts/Button/Button';

const Payment = props => {
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
