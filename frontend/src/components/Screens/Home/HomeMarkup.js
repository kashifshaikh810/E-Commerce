import React from 'react';
import {View, Text, ScrollView, ImageBackground, FlatList} from 'react-native';
import Footer from '../../Layouts/Footer/Footer';
import Header from '../../Layouts/Header/Header';
import styles from './styles';
import Loader from '../../Layouts/Loader/Loader';
import {Card, Button, AirbnbRating} from '@rneui/base';

const HomeMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={require('../../images/cover.jpg')}
          style={styles.imageBackground}>
          <View style={styles.imageBackgroundContentContainer}>
            <Text
              style={[
                styles.findText,
                {fontFamily: 'DynaPuff-VariableFont_wdth,wght'},
              ]}>
              Welcome To Ecommerce
            </Text>
            <Text
              style={[
                styles.findText,
                {fontFamily: 'RubikMarkerHatch-Regular'},
              ]}>
              FIND AMAZING PRODUCTS BELOW
            </Text>

            <Button type="outline">Scroll</Button>
          </View>
        </ImageBackground>

        <View style={styles.featuredTextContainer}>
          <Text
            style={[
              styles.featuredText,
              {fontFamily: 'DynaPuff-VariableFont_wdth,wght'},
            ]}>
            Featured Products
          </Text>
        </View>

        {props.loading ? (
          <Loader {...props} size={40} color="tomato" />
        ) : (
          <FlatList
            data={props.products}
            contentContainerStyle={{flex: 1}}
            renderItem={({item, index}) => (
              <View style={styles.cardContainer} key={index}>
                <Card>
                  <View style={styles.marginBottom}>
                    <Card.Image
                      source={{uri: item.images[0].url}}
                      style={styles.img}
                    />
                  </View>
                  <Card.Divider />
                  <Text>{item.name}</Text>

                  <View style={styles.ratingContainer}>
                    <AirbnbRating
                      size={28}
                      showRating={false}
                      count={5}
                      isDisabled
                      defaultRating={item.ratings}
                    />
                    <Text style={styles.marginLeft}>
                      ({item.numOfReviews} Reviews)
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.price}>₹{item.price}</Text>
                  </View>
                </Card>
              </View>
            )}
          />
        )}

        <Footer />
      </ScrollView>
    </View>
  );
};

export default HomeMarkup;
