import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  headingContainer: tw`border-b-2 border-gray-300 w-11/12 mt-4 pt-4 pb-4 self-center items-center`,
  headingText: tw`text-xl text-gray-500`,
  textInput: tw`border-2 border-gray-400 rounded w-11/12 h-14 self-center mt-5 mb-5 pl-14 pr-5`,
  icon: tw`absolute top-9 left-10 bottom-0 right-0`,
  imgPreviewContainer: tw`flex-row flex-1 items-center self-center`,
  img: tw`w-2/12 h-16`,
  card: tw`w-10/12`,
  buttonStyle: tw`w-11/12 self-center rounded mb-5 bg-red-400`,
});

export default styles;
