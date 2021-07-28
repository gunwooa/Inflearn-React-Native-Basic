import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const MyPicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  picker: {
    width: 300,
    height: 50,
  },
});

export default MyPicker;
