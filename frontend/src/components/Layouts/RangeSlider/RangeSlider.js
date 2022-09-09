// Range slider for React Native (fully compatible with Expo)
// MIT License
// -----------
// Copyright (c) 2021 Hugo Bounoua
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.

/* EXAMPLE OF USE :
<RangeSlider
  name="Price" icon="ticket-percent-outline"
  boundaryMin={0} boundaryMax={99}
  initValMin={12} initValMax={88}
/>
*/

import React from 'react';
import {StyleSheet, View, PanResponder, Animated, Text} from 'react-native';

export default function RangeSlider(props) {
  // ----------------- Render ----------------------- //
  return (
    <View style={s.mainContainer}>
      <View style={s.container}>
        <View style={s.labelValue}>
          <Text style={s.labelValueText}>{props.min_animState.displayVal}</Text>
        </View>
        <View
          style={[
            s.sliderContainer,
            {
              marginHorizontal:
                props.sliderHeight * props.manualOffsetBetweenSlider,
            },
          ]}
          onLayout={event =>
            props.initSliders(
              event.nativeEvent.layout.height,
              event.nativeEvent.layout.width,
            )
          }>
          <View
            style={[s.lineContainer, {backgroundColor: props.colorHighlight}]}>
            {props.min_getLine()}
            {props.max_getLine()}
          </View>
          {props.min_getSlider()}
          {props.max_getSlider()}
        </View>
        <View style={s.labelValue}>
          <Text style={s.labelValueText}>{props.max_animState.displayVal}</Text>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 4,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'row',
  },

  labelValue: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  labelValueText: {
    fontSize: 11,
  },

  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '100%',
    flex: 8,
    overflow: 'visible',
  },
  lineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 4,
    width: '77%',
    flexDirection: 'row',
    position: 'absolute',
    left: '10%',
    top: '50%',
    marginTop: -3,
    borderRadius: 60,
  },
  line: {
    height: '100%',
    width: '95%',
    position: 'absolute',
  },
  draggable: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    aspectRatio: 1,
    position: 'absolute',
    top: -5,
    flexDirection: 'row',
    borderRadius: 100,
    overflow: 'visible',
  },
  circle: {
    // backgroundColor: '#f1f1f1',
    // overflow: 'visible',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // aspectRatio: 1,
    // backgroundColor: '#ffffff',
    // borderRadius: 15,
    // borderWidth: 1,
    // borderColor: '#b3b3b3',
    overflow: 'hidden',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    // height: '100%',
    // width: '40%',
    // paddingBottom: 10,
  },
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 3,
    position: 'absolute',
    bottom: 0,
  },
  label: {
    fontSize: 9,
  },
});
