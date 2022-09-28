import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  headingContainer: tw`flex-1 items-center mt-4 pt-4`,
  headingText: tw`text-2xl text-gray-500`,
  head: tw`h-16 bg-red-400 text-center`,
  headerText: tw`m-2 text-sm text-white text-center`,
  text: tw`m-2 text-sm text-gray-500 h-24 text-center`,
  row: tw`flex-row bg-white`,
  table: tw`mt-4 pt-4`,
  footer: tw`h-14 w-full bg-gray-600 justify-center items-center`,
  tableContainer: tw`p-2 pl-0 pr-0 mt-4`,
  tableMain: {borderWidth: 1, borderColor: 'rgba(0,0,0,0.200)'},
  elementContainer: tw`h-24 flex-row self-center`,
  icon: tw`pl-2 pr-1`,
});

export default styles;
