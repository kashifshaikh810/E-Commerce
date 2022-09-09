import React from 'react';
import {StyleSheet, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {ProgressStep, ProgressSteps} from '../../Layouts/ProgressSteps/index';

const Progress = ({activeStep}) => {
  return (
    <View style={styles.progressStep}>
      <ProgressSteps activeStep={activeStep}>
        <ProgressStep label="Shipping Details" removeBtnRow={true} />
        <ProgressStep label="Confirm Order" removeBtnRow={true} />
        <ProgressStep label="Payment" removeBtnRow={true} />
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  progressStep: tw`h-32 w-full`,
});

export default Progress;
