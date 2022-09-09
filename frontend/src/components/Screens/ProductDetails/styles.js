import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  image: tw`w-11/12 h-52 rounded-xl self-center mt-7`,
  detailsContainer: tw`pl-5 pt-5`,
  productName: tw`text-xl text-black font-extrabold`,
  productID: tw`text-sm text-gray-400`,
  star: tw`h-20 mt-5`,
  ratingContainer: tw`flex-row items-center mb-4`,
  marginLeft: tw`ml-4 text-base text-gray-400`,
  priceContainer: tw`pt-2`,
  price: tw`text-gray-500 text-xl`,
  buttonAndQuantityContainer: tw`pb-10 flex-row items-center`,
  buttonStyle: tw`w-5/12 h-12 bg-gray-400`,
  numOfQuantity: tw`absolute right-5 top-0 text-xl`,
  numOfQuantityTwo: tw`absolute right-11 top-0 text-xl`,
  paddingLeft: tw`pl-9`,
  addToCart: tw`w-9/12 h-8 p-1 rounded-full bg-red-400`,
  stockContainer: tw`mb-4`,
  stock: tw`text-base text-gray-400`,
  description: tw`text-xl text-black`,
  descriptionText: tw`w-11/12 pt-1 pb-4 text-base`,
  myStarStyle: {
    color: '#faaf00',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  width: tw`w-11/12`,
  reviewsLine: tw`w-8/12`,
  reviewsHeadingContainer: tw`items-center`,
  reviewsHeading: tw`text-xl text-black pb-2.5`,
  flatListContainer: tw`flex-1`,
  flatList: tw`w-full items-center mt-4`,
  reviewsCard: tw`w-11/12 h-48 justify-evenly items-center self-center border-2 border-gray-100 mb-4`,
  reviewUserImage: tw`w-3/12 h-20`,
  reviewUserName: tw`capitalize text-base text-black`,
  reviewUserComment: tw`capitalize text-sm text-gray-400`,
  submitReview: tw`w-5/12 h-8 p-1 rounded-full bg-red-400`,
});

export default styles;
