import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`p-5 bg-white flex-row shadow-xl`,
  title: tw`pl-1 text-xl uppercase font-sans text-gray-400`,
  paddingLeft: tw`pl-4`,
  img: tw`w-6/12 h-9`,
  menu: tw`pt-1`,
  avatar: tw`flex-1 justify-center items-end`,
  dialog: tw`flex-1 bg-transparent w-full pt-16 pr-5`,
  mapContent: tw`flex-row pt-5`,
  iconsContainer: tw`flex-1 flex-row justify-end items-center`,
  icons: tw`bg-white p-3 rounded-full`,
  touchableOpacity: tw`flex-row self-end justify-end items-end`,
  titleContainer: tw`pl-3 pr-3 h-6 mr-4 justify-center items-center bg-gray-500 rounded`,
  titleText: tw`text-xs text-white`,
  paddingTop: tw`pt-14`,
  marginTop: tw`mt-10`,
});

export default styles;
