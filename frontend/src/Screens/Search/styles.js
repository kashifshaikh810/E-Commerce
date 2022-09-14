import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  searchingBox: tw`flex-1 justify-center items-center`,
  textInput: tw`w-11/12 h-16 border-2 border-gray-200 shadow rounded-xl pl-7 pr-7`,
  buttonStyle: tw`w-11/12 h-14 rounded-xl bg-red-400`,
});

export default styles;
