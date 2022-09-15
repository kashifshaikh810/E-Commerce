import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import RangeSlider from '../../components/Layouts/RangeSlider/RangeSlider';
import {Card, Skeleton, Slider} from '@rneui/themed';
import Stars from 'react-native-stars';
import CircleIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const categories = [
  'Laptop',
  'Footwear',
  'Bottom',
  'Tops',
  'Attire',
  'Camera',
  'SmartPhones',
];

const ProductsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            onRefresh={props.onRefresh}
            refreshing={props.refreshing}
          />
        }>
        <View style={styles.productsFilter}>
          <View>
            <Text style={styles.priceText}>Price</Text>
            <Card.Divider style={styles.dividerWidth} />
          </View>

          <View style={styles.padding}>
            <RangeSlider {...props} />
          </View>

          <View>
            <Text style={styles.categoriesText}>Categories</Text>
            <Card.Divider style={styles.dividerWidth} />
          </View>

          <ScrollView style={styles.scrollView} horizontal>
            {categories.map((item, i) => (
              <TouchableOpacity onPress={() => props.setCategory(item)}>
                <Card>
                  <Text>{item}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.ratingHeading}>Rating Above :</Text>
            <Text style={styles.ratingHeading}>{props.ratings}</Text>
          </View>

          <View style={styles.sliderContainer}>
            <Slider
              value={props.ratings}
              onValueChange={val => props.setRatings(val)}
              maximumValue={5}
              minimumValue={0}
              step={1}
              minimumTrackTintColor="#3f3fed"
              allowTouchTrack
              thumbStyle={{
                height: 20,
                width: 16,
                backgroundColor: 'transparent',
              }}
              trackStyle={{height: 5, backgroundColor: 'transparent'}}
              thumbStyle={{
                height: 25,
                width: 25,
                backgroundColor: 'blue',
              }}
              thumbProps={{
                children: (
                  <CircleIcon
                    name="circle"
                    size={20}
                    style={{
                      left: 3,
                      top: 0,
                      bottom: 20,
                      right: 0,
                    }}
                    color={'blue'}
                  />
                ),
              }}
            />
          </View>

          <View style={styles.featuredTextContainer}>
            <Text
              style={[
                styles.featuredText,
                {fontFamily: 'DynaPuff-VariableFont_wdth,wght'},
              ]}>
              Products
            </Text>
            <Card.Divider style={styles.dividerWidth} />
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
                      })
                    }>
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
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default ProductsMarkup;
