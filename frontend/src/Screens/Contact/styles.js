import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  contactContainer: tw`flex-1 justify-end items-center pb-10`,
  textStyle: tw`text-xl text-center pt-2`,
  lottie: tw`absolute top-0 bottom-32 left-0 right-0`,
  footer: tw`h-36`,
});

export default styles;
