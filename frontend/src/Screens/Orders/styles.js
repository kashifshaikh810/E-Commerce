import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  head: tw`h-16 bg-red-400 text-center`,
  headerText: tw`m-2 text-sm text-white text-center`,
  text: tw`m-2 text-sm text-gray-500 h-24 text-center`,
  row: tw`flex-row bg-white`,
  footer: tw`h-14 w-full bg-gray-600 justify-center items-center`,
  tableContainer: tw`p-2 pl-0 pr-0 mt-4`,
  footerText: tw`text-white text-base`,
  tableMain: {borderWidth: 1, borderColor: 'rgba(0,0,0,0.200)'},
  noStyle: tw`h-64 text-center text-xl text-gray-400 pt-24 mt-10`,
});

export default styles;
