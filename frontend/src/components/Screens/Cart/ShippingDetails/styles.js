import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  shippingDetailsTextContainer: tw`border-b-2 border-gray-300 w-8/12 self-center items-center`,
  shippingDetailsText: tw`pb-5 text-xl text-gray-400`,
  textInput: tw`border-2 border-gray-400 rounded w-11/12 h-14 self-center mt-5 mb-5 pl-14 pr-5`,
  icon: tw`absolute top-9 left-10 bottom-0 right-0 mt-0.5`,
  iconTwo: tw`absolute top-4 left-6 bottom-0 right-0 mt-0.5`,
  picker: tw`border-2 border-gray-400 rounded w-11/12 h-14 self-center mt-5 mb-5 pl-10 pr-5`,
  buttonStyle: tw`w-11/12 h-14 bg-red-400 self-center mb-10 rounded-xl`,
});

export default styles;
