import React, {useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import Input from './src/Input';
import NumList from './src/NumList';
import MyPicker from './src/MyPicker';
import MySlider from './src/MySlider';

const App = () => {
  const [myTextInput, setMyTextInput] = useState('');
  const [alphabet, setAlphabet] = useState(['a', 'b', 'c', 'd']);

  const onChangeInput = event => {
    setMyTextInput(event);
  };

  const onAddTextInput = () => {
    setMyTextInput('');
    setAlphabet(prevState => [...prevState, myTextInput]);
  };

  const onResetTextInput = () => {
    setAlphabet([]);
  };

  const onDeleteTextInput = deleteIndex => {
    setAlphabet(prevState => {
      return prevState.filter((item, index) => deleteIndex !== index);
    });
  };

  return (
    <View style={styles.mainView}>
      <MySlider />
      <MyPicker />
      <ActivityIndicator size="large" color="green" animating={true} />
      <Input value={myTextInput} onChangeText={onChangeInput} />
      <View style={styles.buttonView}>
        <Button title="Add Text Input" onPress={onAddTextInput} />
        <Button title="Reset Text Input" onPress={onResetTextInput} />
      </View>
      <ScrollView style={styles.scrollView}>
        <NumList num={alphabet} delete_={onDeleteTextInput} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: 'white',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  scrollView: {
    width: '100%',
  },
});

export default App;
