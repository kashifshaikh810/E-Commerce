import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  orderTextContainer: tw`ml-6 pt-4 mt-6`,
  orderText: tw`text-red-400 text-2xl`,
  shippingInfo: tw`flex-row pt-5 pl-5`,
  shippingInfoHeading: tw`text-2xl pt-4 capitalize text-black`,
  shippingInfoTitle: tw`text-black text-base`,
  shippingInfoSubTitle: tw`text-gray-500 text-base w-9/12`,
  paidText: tw`text-green-600 text-base`,
  divider: tw`w-full h-0.5 bg-gray-300 mt-6`,
  orderItemsHeading: tw`text-xl pt-4 pl-6 capitalize text-black`,
  orderItemsContainer: tw`flex-row items-center m-6`,
  nameText: tw`pl-3 text-base`,
  priceContainer: tw`flex-1 items-end`,
  image: tw`w-2/12 h-14`,
  quantityAndPriceText: tw`text-sm`,
  priceText: tw`text-sm text-gray-500 font-extrabold`,
  processContainer: tw`mt-7 mb-10`,
  processMain: tw`flex-1 items-center`,
  processText: tw`text-3xl text-black`,
  iconTwo: tw`absolute top-4 left-6 bottom-0 right-0 mt-0.5`,
  iOSIconTwo: tw`absolute top-24 left-6 mt-0.5 bottom-0 right-0`,
  picker: tw`border-2 border-gray-400 rounded w-11/12 h-14 self-center mt-5 mb-5 pl-10 pr-5`,
  buttonStyle: tw`w-11/12 p-2 self-center bg-red-400`,
});

export default styles;
