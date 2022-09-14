import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1`,
  scrollView: tw`flex-1 bg-white`,
  inputsContainer: tw`p-5`,
  paddingLeft: tw`pl-5`,
  imgPreaviewContainer: tw`flex-row flex-1 items-center`,
  img: tw`w-2/12 h-16`,
  card: tw`w-10/12`,
  chooseFileTitle: tw`text-center`,
  marginTop: tw`mt-4`,
  gray: tw`text-gray-500`,
  red: tw`text-red-600`,
  imgPreview: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
});

export default styles;
