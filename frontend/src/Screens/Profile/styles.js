import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  profileContainer: tw`flex-1 items-center pt-12`,
  myProfile: tw`text-3xl text-gray-500`,
  paddingTop: tw`mt-5`,
  profileImage: {width: 200, height: 200, borderRadius: 100},
  buttonStyle: tw`w-full h-9 p-1 rounded-full bg-red-400`,
  profileDetailsContainer: tw`flex-1 self-center pt-12`,
  textContainer: tw`flex-row pb-8`,
  title: tw`text-black text-base`,
  subTitle: tw`text-gray-400 text-base pl-2`,
  buttonsContainer: tw`flex-1 pb-12`,
  myButtonStyle: tw`w-11/12 h-9 p-1 bg-red-400 self-center`,
});

export default styles;
