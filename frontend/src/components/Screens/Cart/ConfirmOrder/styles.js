import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  shippingText: tw`text-2xl text-black pl-2 ml-2`,
  shippingAreaMain: tw`ml-4 pl-4 mt-5`,
  shippingAreaContainer: tw`flex-row pb-5`,
  shippingTitle: tw`text-base text-black`,
  shippingSubTitle: tw`text-base text-gray-400 ml-2 w-9/12`,
  orderSummaryContainer: tw`border-b-2 border-gray-300 w-10/12 self-center items-center pb-4 pt-4`,
  orderSummaryText: tw`text-2xl text-black`,
  subTitleContainer: tw`flex-1 items-end`,
  subTitle: tw`text-base text-gray-500 pr-5 mr-5`,
  paddingTop: tw`pt-2`,
  paddingBottomNone: tw`pb-0`,
  totalText: tw`text-base text-black font-extrabold`,
  numOfTotal: tw`text-base text-black pr-5 mr-5`,
  buttonStyle: tw`w-10/12 h-14 bg-red-400 self-center mb-10`,
  flatListContent: tw`flex-row items-center m-5 pb-5`,
  image: tw`w-2/12 h-8`,
  name: tw`pl-2 ml-2 text-base`,
});

export default styles;
