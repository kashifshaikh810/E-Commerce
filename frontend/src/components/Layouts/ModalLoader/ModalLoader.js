import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dialog} from '@rneui/themed';
import tw from 'tailwind-react-native-classnames';
import Lottie from 'lottie-react-native';

const ModalLoader = props => {
  return (
    <Dialog
      isVisible={props?.isVisible}
      animationType="fade"
      overlayStyle={styles.loadingDialog}
      backdropStyle={{backgroundColor: 'rgba(0,0,0,0.250)'}}>
      <Lottie source={require('../../images/loading.json')} autoPlay loop />
    </Dialog>
  );
};

export default ModalLoader;

const styles = StyleSheet.create({
  loadingDialog: tw`bg-gray-200 h-64 w-11/12`,
  loadingText: tw`text-2xl uppercase text-gray-400`,
  bgTransparent: tw`bg-transparent`,
});
