import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MinusIcon from 'react-native-vector-icons/AntDesign';
import MyButton from '../../components/Layouts/Button/Button';
import {Card, Skeleton} from '@rneui/themed';
import SubmitReview from './SubmitReview';
import Carousel from '../../components/Layouts/Carousel/index';
import {Pagination} from '../../components/Layouts/Carousel/index';

const ProductDetailsMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} backRouteName="Products" />
      <ScrollView
        style={styles.scrollView}
        nestedScrollEnabled
        scrollEnabled={true}>
        <View>
          {props.detailsLoading ? (
            <Skeleton animation="wave" style={styles.image} />
          ) : (
            <Image
              source={
                {uri: props?.image} ||
                require('../../components/images/cover.jpg')
              }
              style={styles.image}
            />
          )}
        </View>

        <View
          style={[
            styles.detailsContainer,
            props.orientation === 'landscape' && styles.paddingLeft,
          ]}>
          {props.detailsLoading ? (
            <Skeleton animation="wave" width={150} height={20} />
          ) : (
            <Text style={styles.productName}>{props.product.name}</Text>
          )}
          <Text style={styles.productID}>
            Product #{' '}
            {props.detailsLoading ? (
              <Skeleton animation="wave" width={200} height={20} />
            ) : (
              props.product._id
            )}
          </Text>

          <View style={styles.star}>
            <Card.Divider style={styles.width} />
            {props.detailsLoading ? (
              <View style={styles.ratingContainer}>
                <Skeleton animation="wave" width={310} height={20} />
              </View>
            ) : (
              <View style={styles.ratingContainer}>
                <Stars
                  default={props.product.ratings}
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
                      style={[styles.myStarStyle, styles.myEmptyStarStyle]}
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
                  ({props.product.numOfReviews}Reviews)
                </Text>
              </View>
            )}
            <Card.Divider style={styles.width} />
          </View>

          <View style={styles.priceContainer}>
            {props.detailsLoading ? (
              <Skeleton animation="wave" width={150} height={20} />
            ) : (
              <Text style={styles.price}>{`₹${props.product.price}`}</Text>
            )}

            {props.user && (
              <View style={styles.buttonAndQuantityContainer}>
                <View>
                  <MyButton
                    title={<MinusIcon name="minus" size={20} color="#FFF" />}
                    buttonStyle={styles.buttonStyle}
                    onPress={() => props.decreaseQuantity()}
                  />
                </View>
                <View>
                  <Text
                    style={
                      props.orientation === 'portrait'
                        ? styles.numOfQuantity
                        : styles.numOfQuantityTwo
                    }>
                    {props.quantity}
                  </Text>
                </View>
                <View>
                  <MyButton
                    title={<MinusIcon name="plus" size={20} color="#FFF" />}
                    buttonStyle={styles.buttonStyle}
                    onPress={() => props.increaseQuantity()}
                  />
                </View>

                <View>
                  <MyButton
                    title="Add to Cart"
                    buttonStyle={styles.addToCart}
                    onPress={() => props.addToCart()}
                  />
                </View>
              </View>
            )}
          </View>

          <View style={styles.stockContainer}>
            <Card.Divider style={styles.width} />
            <View style={styles.ratingContainer}>
              <Text style={styles.stock}>Status :- </Text>
              {props.detailsLoading ? (
                <Skeleton animation="wave" width={80} height={20} />
              ) : (
                <Text
                  style={[
                    styles.stock,
                    props.product.Stock > 1 && {color: 'green'},
                  ]}>
                  {props.product.Stock > 1 ? 'InStock' : 'OutStock'}
                </Text>
              )}
            </View>
            <Card.Divider style={styles.width} />
          </View>

          <View style={styles.stockContainer}>
            <Text style={styles.description}>Description :-</Text>
            {props.detailsLoading ? (
              <Skeleton animation="wave" width={320} height={100} />
            ) : (
              <Text style={styles.descriptionText}>
                {props.product.description}
              </Text>
            )}
            {props.user && (
              <MyButton
                title="Submit Review"
                buttonStyle={styles.submitReview}
                onPress={() => props.toggleOverlay()}
              />
            )}

            <SubmitReview {...props} />
          </View>
        </View>
        <View style={styles.reviewsHeadingContainer}>
          <Text style={styles.reviewsHeading}>REVIEWS</Text>
          <Card.Divider style={styles.reviewsLine} />
        </View>

        <View style={styles.flatList}>
          <Carousel
            ref={props.isCarousel}
            data={props?.product && props?.product?.reviews}
            onSnapToItem={index => props.setIndex(index)}
            renderItem={({item, index}) =>
              props.detailsLoading ? (
                <Skeleton animation="wave" style={styles.image} />
              ) : (
                <View style={styles.reviewsCard}>
                  <Image
                    source={require('../../components/images/Profile.png')}
                    style={styles.reviewUserImage}
                  />
                  <Text style={styles.reviewUserName}>{item.name}</Text>
                  <Stars
                    default={item.rating}
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
                        style={[styles.myStarStyle, styles.myEmptyStarStyle]}
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
                  <Text style={styles.reviewUserComment}>{item.comment}</Text>
                </View>
              )
            }
            sliderWidth={320}
            itemWidth={320}
            windowSize={1}
            useScrollView={true}
            inactiveSlideShift={0}
          />
        </View>

        <Pagination
          dotsLength={props?.product && props?.product?.reviews?.length}
          activeDotIndex={props.index}
          ref={props.isCarousel}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            backgroundColor: 'rgba(0, 0, 0, 0.61)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
          tappableDots={true}
        />

        <Footer {...props} />
      </ScrollView>
    </View>
  );
};

export default ProductDetailsMarkup;
