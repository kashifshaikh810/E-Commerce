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
  mapContainer: tw`flex-1`,
  mapContent: tw`flex-row pt-5`,
  iconsContainer: tw`flex-1 items-end`,
  icons: tw`bg-white p-3 rounded-full`,
});

export default styles;
