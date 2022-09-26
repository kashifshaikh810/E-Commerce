import {StyleSheet} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const styles = StyleSheet.create({
  container: tw`flex-1 bg-white`,
  scrollView: tw`flex-1`,
  dashboardContent: tw`flex-1`,
  dashboardHeadingContainer: tw`flex-1 justify-center items-center pt-3 mt-3`,
  dashboardHeadingText: tw`text-2xl`,
  totalAmountContainer: tw`w-11/12 h-24 justify-center items-center self-center bg-blue-500 mt-4`,
  divider: tw`w-11/12 h-0.5 self-center justify-center items-center mt-1 mb-1 bg-white`,
  totalAmountText: tw`text-white text-base`,
  circleContainer: tw`w-6/12 h-48 self-center mt-5 rounded-full justify-center items-center`,
  circleContent: tw`items-center`,
  circleTitle: tw`text-2xl`,
  chartsContainer: tw`mt-5 ml-1`,
});

export default styles;
