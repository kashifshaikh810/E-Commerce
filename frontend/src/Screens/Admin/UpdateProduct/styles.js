import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  createProductHeadingContainer: tw`flex-1 items-center mt-4 pt-4`,
  createProductHeadingText: tw`text-2xl text-gray-500`,
  inputsSectionContainer: tw`p-5`,
  marginTop: tw`mt-4`,
  input: tw`pl-4`,
  picker: tw`border-2 border-gray-400 rounded w-11/12 h-14 self-center mt-5 mb-5 pl-10 pr-5`,
  buttonStyle: tw`w-11/12 h-12 bg-red-400 self-center mb-10 rounded-xl`,
  iconTwo: tw`absolute top-4 left-6 bottom-0 right-0 mt-0.5`,
  iOSIconTwo: tw`absolute top-24 left-7 bottom-0 right-0 mt-1`,
  chooseFileContainer: tw`border-2 border-gray-200 flex-1 justify-center items-center h-12 w-11/12 self-center`,
  chooseFileText: tw`text-sm text-gray-400`,
  map: tw`mt-6 pl-5`,
  image: {width: 50, height: 50},
});

export default styles;
