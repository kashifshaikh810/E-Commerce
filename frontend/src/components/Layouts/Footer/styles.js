import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 justify-start pt-5 items-center h-32 bg-gray-700 w-11/12 self-center rounded-xl mb-5`,
  heading: tw`text-gray-400 text-4xl`,
  bottomHeading: tw`text-white text-base pt-1.5`,
});

export default styles;
