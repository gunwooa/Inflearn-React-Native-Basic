import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const MySlider = () => {
  const [value, setValue] = useState(0);

  const sliderValueChange = event => {
    setValue(event);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#cecece"
        maximumTrackTintColor="pink"
        step={1}
        value={value}
        onValueChange={sliderValueChange}
        // onSlidingComplete={sliderValueChange}
      />
      <View>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    // paddingTop: 20,
    // marginBottom: 200,
    alignItems: 'center',
  },
  slider: {
    width: 300,
    height: 40,
  },
  text: {
    fontSize: 25,
    color: 'red',
  },
});

export default MySlider;
