import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  head: tw`h-14 bg-red-500`,
  headerText: tw`m-2 text-sm text-white`,
  text: tw`m-2 text-sm text-gray-500`,
  row: tw`flex-row bg-white`,
  btn: {width: 58, height: 18, backgroundColor: '#78B7BB', borderRadius: 2},
  btnText: {textAlign: 'center', color: '#fff'},
  footer: tw`h-14 w-full bg-gray-600 justify-center items-center`,
  tableContainer: tw`p-2 pl-0 pr-0 mt-4`,
  footerText: tw`text-white text-base`,
});

export default styles;
