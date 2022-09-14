import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  productsFilter: tw`w-full self-center`,
  priceText: tw`text-xl text-black text-center pb-4 pt-5`,
  categoriesText: tw`text-xl text-black text-center pb-4`,
  dividerWidth: tw`w-8/12 self-center`,
  padding: tw`p-5 pb-0 pt-0`,
  ratingHeading: tw`p-4 pb-0 pr-0 text-base`,
  sliderContainer: tw`w-11/12 self-center justify-center items-stretch`,
  featuredTextContainer: tw`flex-1 justify-center items-center pt-10`,
  featuredText: tw`text-xl text-center pb-4`,
  cardContainer: tw`mb-5`,
  marginBottom: tw`mb-2`,
  ratingContainer: tw`flex-1 pt-3 flex-row items-center`,
  marginLeft: tw`ml-4 text-base text-gray-400`,
  price: tw`text-base ml-1.5 mt-3 text-red-500`,
  skeleton: tw`w-11/12 h-52 rounded-xl self-center mt-4 mb-4`,
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
  warn: tw`h-14 w-full justify-center items-center`,
});

export default styles;
