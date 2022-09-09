import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  height: tw`h-40`,
  tableHeader: tw`flex-1 flex-row justify-between items-center p-2 bg-red-400 mt-6 ml-2 mr-2`,
  headingText: tw`text-base text-white`,
  image: tw`w-full h-8`,
  tableContent: tw`flex-1 flex-row justify-between items-center p-2.5 pl-0 m-2 mb-0`,
  tableContentTwo: tw`flex-1 flex-row justify-between items-center p-2.5 pl-0 m-2 mb-0 min-h-full`,
  buttonAndQuantityContainer: tw`flex-1 flex-row justify-center`,
  buttonStyle: tw`m-6 mt-0 ml-4 bg-gray-400`,
  numOfQuantity: tw`absolute top-8 right-0 text-xl`,
  numOfQuantityTwo: tw`absolute top-8 right-0 text-xl`,
  name: tw`text-sm text-gray-600 pt-0.5`,
  removeText: tw`text-base text-red-500 pt-0.5`,
  dividerWidth: tw`w-11/12 h-0.5 bg-gray-200 self-center`,
  dividerLine: tw`mt-2 w-11/12 h-1.5 self-center bg-red-400 rounded-full`,
  totalContainer: tw`pb-5`,
  grossTotalContainer: tw`flex-1 flex-row justify-between p-5 pb-3`,
  grossTotalText: tw`text-xl text-black`,
  checkOutButtonStyle: tw`bg-red-400 p-4 w-11/12 rounded-xl self-center`,
});

export default styles;
