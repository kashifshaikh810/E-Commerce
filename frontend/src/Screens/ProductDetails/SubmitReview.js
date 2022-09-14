import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Overlay, AirbnbRating} from '@rneui/themed';
import tw from 'tailwind-react-native-classnames';
import MyButton from '../../components/Layouts/Button/Button';

const SubmitReview = props => {
  return (
    <Overlay
      isVisible={props.visible}
      onBackdropPress={props.toggleOverlay}
      overlayStyle={styles.container}>
      <View>
        <Text style={styles.submitReview}>Submit Review</Text>
        <View>
          <AirbnbRating
            defaultRating={props.ratings}
            onFinishRating={rating => props.setRatings(rating)}
            showRating={false}
            size={25}
            ratingContainerStyle={styles.rating}
          />
        </View>
      </View>
      <TextInput
        style={[styles.textInput, styles.top]}
        placeholder="Your Review..."
        returnKeyType="next"
        multiline
        numberOfLines={10}
        scrollEnabled
        value={props.comment}
        onChangeText={text => props.setComment(text)}
      />
      <View style={styles.buttonsContainer}>
        <MyButton
          title="CANCEL"
          buttonStyle={styles.buttonStyle}
          onPress={() => props.toggleOverlay()}
        />

        <MyButton
          title="SUBMIT"
          buttonStyle={styles.cancelButtonStyle}
          onPress={() => props.submitReview()}
          loading={props.loading}
        />
      </View>
    </Overlay>
  );
};

export default SubmitReview;

const styles = StyleSheet.create({
  container: tw`w-11/12 pl-4`,
  submitReview: tw`text-black text-xl pt-2`,
  rating: tw`absolute pt-2`,
  textInput: tw`h-32 pl-3 pt-3 border-2 border-gray-200 w-full mt-14`,
  top: {textAlignVertical: 'top'},
  buttonsContainer: tw`flex-row w-full justify-end`,
  buttonStyle: tw`w-8/12 bg-pink-500`,
  cancelButtonStyle: tw`w-8/12 bg-green-600`,
});
