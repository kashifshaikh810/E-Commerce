import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  paddingBottom: tw`pb-3`,
  aboutUS: tw`text-4xl text-center pt-4 pb-4`,
  lottie: tw`h-64 w-full self-center`,
  text: tw`text-base w-11/12 pt-0 self-center`,
  image: tw`h-72 w-11/12 self-center mb-5`,
});

export default styles;
