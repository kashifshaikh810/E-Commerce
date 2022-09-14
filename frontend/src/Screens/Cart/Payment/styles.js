import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  height: tw`h-40`,
  contentContainer: tw`flex-1`,
  cardInfoContainer: tw`border-b-2 border-gray-300 w-10/12 self-center items-center pb-4 pt-4`,
  cardInfoText: tw`text-2xl text-black`,
  textInput: tw`border-2 border-gray-400 rounded w-10/12 h-14 self-center mt-5 mb-5 pl-16 pr-5`,
  icon: tw`absolute top-9 left-14 bottom-0 right-0 mt-0.5`,
  buttonStyle: tw`w-10/12 h-14 bg-red-400 self-center mb-10 rounded`,
});

export default styles;
