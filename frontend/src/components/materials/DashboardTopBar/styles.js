import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  dataContainer: tw`flex-row items-center pl-3 p-8 mb-2`,
  icon: tw`pr-2`,
  iconName: tw`text-xl text-gray-500`,
  productsList: tw`absolute top-24 left-64 right-0 bottom-0`,
  flexRow: tw`flex-row items-center mt-1`,
  height: tw`h-40`,
  productsListText: tw`text-xl text-gray-500`,
  divider: tw`w-full h-0.5 bg-gray-100`,
});

export default styles;
