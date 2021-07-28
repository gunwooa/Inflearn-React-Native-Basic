import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Generator = ({add}) => {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={() => add()} />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    width: '100%',
    padding: 5,
  },
});

export default Generator;
