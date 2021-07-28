import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const NumList = ({num, delete_}) => {
  return num.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.wrap}
        onPress={() => delete_(index)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  });
};

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    padding: 20,
    marginTop: 20,
    color: 'red',
    backgroundColor: 'pink',
  },
});

export default NumList;
