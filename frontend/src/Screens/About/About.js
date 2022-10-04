import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import Lottie from 'lottie-react-native';

const About = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <View style={styles.paddingBottom}>
          <Text style={styles.aboutUS}>About Us</Text>
          <Image
            source={require('../../components/images/ecomTools.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <Lottie
            source={require('../../components/images/109999-animation-for-ecommerce-business-landing-page.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
          <Footer {...props} />
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
