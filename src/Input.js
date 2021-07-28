import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = ({value, onChangeText}) => {
  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.input}
        value={value}
        multiline={true}
        maxLength={100}
        autoCapitalize={'none'} // 첫 글자 대문자 none
        editable={true} // 활성화
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 15,
  },
});

export default Input;
