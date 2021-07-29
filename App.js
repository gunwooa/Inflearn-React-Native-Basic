import React, {useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';

import Input from './src/Input';
import NumList from './src/NumList';
import MyPicker from './src/MyPicker';
import MySlider from './src/MySlider';
import iuImgSrc from './assets/iu.jpeg';

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
      <Image
        style={styles.iuImage}
        source={iuImgSrc}
        resizeMode="contain"
        onLoadEnd={() => alert('굿')}
      />
      {/* <MySlider />
      <MyPicker />
      <ActivityIndicator size="large" color="green" animating={true} />
      <Input value={myTextInput} onChangeText={onChangeInput} />
      <View style={styles.buttonView}>
        <Button title="Add Text Input" onPress={onAddTextInput} />
        <Button title="Reset Text Input" onPress={onResetTextInput} />
      </View>
      <ScrollView style={styles.scrollView}>
        <NumList num={alphabet} delete_={onDeleteTextInput} />
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  iuImage: {
    width: '100%',
    height: 400,
    backgroundColor: 'red',
  },
});

export default App;
