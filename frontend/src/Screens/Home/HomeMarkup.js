import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Footer from '../../components/Layouts/Footer/Footer';
import Header from '../../components/Layouts/Header/Header';
import styles from './styles';
import {Card, Button, Skeleton} from '@rneui/base';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView
        style={styles.scrollView}
        ref={props.scrollViewRef}
        refreshControl={
          <RefreshControl
            onRefresh={props.onRefresh}
            refreshing={props.refreshing}
          />
        }>
        <ImageBackground
          source={require('../../components/images/cover.jpg')}
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

            <Button type="outline" onPress={() => props.scollPressHandler()}>
              Scroll
            </Button>
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
        {props.products.length >= 1 ? (
          <FlatList
            data={props.products}
            contentContainerStyle={{flex: 1}}
            keyExtractor={(item, index) => `key-${index}`}
            renderItem={({item, index}) =>
              props.loading || props.refreshing ? (
                <Skeleton animation="wave" style={styles.skeleton} />
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('ProductDetails', {
                      productID: item._id,
                      isMyRoute: true,
                    })
                  }>
                  <View style={styles.cardContainer} key={index}>
                    <Card>
                      <View style={styles.marginBottom}>
                        <Card.Image
                          source={
                            item.images.length >= 1
                              ? {uri: item.images[0].url}
                              : require('../../components/images/cover.jpg')
                          }
                          style={styles.img}
                        />
                      </View>
                      <Card.Divider />
                      <Text>{item.name}</Text>

                      <View style={styles.ratingContainer}>
                        <Stars
                          default={item.ratings}
                          count={5}
                          spacing={4}
                          half
                          starSize={60}
                          disabled
                          fullStar={
                            <Icon
                              size={25}
                              name={'star'}
                              style={[styles.myStarStyle]}
                            />
                          }
                          emptyStar={
                            <Icon
                              size={25}
                              name={'star-outline'}
                              style={[
                                styles.myStarStyle,
                                styles.myEmptyStarStyle,
                              ]}
                            />
                          }
                          halfStar={
                            <Icon
                              size={25}
                              name={'star-half-full'}
                              style={[styles.myStarStyle]}
                            />
                          }
                        />

                        <Text style={styles.marginLeft}>
                          ({item.numOfReviews}{' '}
                          {item.ratings > 1 ? 'Reviews' : 'Review'})
                        </Text>
                      </View>

                      <View>
                        <Text style={styles.price}>₹{item.price}</Text>
                      </View>
                    </Card>
                  </View>
                </TouchableOpacity>
              )
            }
          />
        ) : (
          <View style={styles.warn}>
            <Text>No Products</Text>
          </View>
        )}
        <Footer />
      </ScrollView>
    </View>
  );
};

export default HomeMarkup;
