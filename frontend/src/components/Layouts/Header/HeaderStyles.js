import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`p-5 bg-white flex-row shadow-xl`,
  title: tw`pl-1 text-xl uppercase font-sans text-gray-400`,
  iconsContainer: tw`flex-row flex-1 justify-end`,
  paddingLeft: tw`pl-4`,
  img: tw`w-6/12 h-9`,
  menu: tw`pt-1`,
});

export default styles;
