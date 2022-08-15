import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 justify-start pt-5 items-center h-32 bg-gray-700`,
  heading: tw`text-gray-400 text-4xl`,
  bottomHeading: tw`text-white text-sm pt-1.5`,
  paddingLeft: tw`pl-4`,
});

export default styles;
