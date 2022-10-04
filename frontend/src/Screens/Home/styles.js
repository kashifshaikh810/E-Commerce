import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  imageBackground: tw`flex-1 h-64 mt-1.5`,
  imageBackgroundContentContainer: tw`flex-1 max-h-64 justify-around items-center`,
  findText: tw`text-white`,
  buttonStyle: tw`w-8/12 p-1 self-center bg-gray-400`,
  featuredTextContainer: tw`flex-1 justify-center items-center pt-10`,
  featuredText: tw`text-xl border-b-2 border-gray-200 w-8/12 text-center pb-2`,
  cardContainer: tw`mb-10`,
  marginBottom: tw`mb-2`,
  img: tw`w-full h-48`,
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
  warn: tw`h-20 w-full justify-center items-center`,
});

export default styles;
