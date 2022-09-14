import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dialog} from '@rneui/themed';
import Loader from '../Loader/Loader';
import tw from 'tailwind-react-native-classnames';

const ModalLoader = props => {
  return (
    <Dialog
      isVisible={props?.isVisible}
      animationType="fade"
      overlayStyle={styles.loadingDialog}
      backdropStyle={styles.bgTransparent}
      // onBackdropPress={toggleDialog}
    >
      <View>
        <Text style={styles.loadingText}>loading...</Text>
      </View>
      <View>
        <Loader size={30} color="#b3b3b3" />
      </View>
    </Dialog>
  );
};

export default ModalLoader;

const styles = StyleSheet.create({
  loadingDialog: tw`bg-gray-600 h-36 w-11/12 justify-evenly items-center`,
  loadingText: tw`text-2xl uppercase text-gray-400`,
  bgTransparent: tw`bg-transparent`,
});
