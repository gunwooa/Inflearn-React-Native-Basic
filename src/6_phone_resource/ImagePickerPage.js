import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView, View, Image, Button} from 'react-native';

function ImagePickerPage() {
  const [avatar, setAvatar] = useState(null);

  const addImage = () => {
    launchCamera({}, response => {
      const isError = response.errorCode ? true : false;
      if (isError) {
        alert(`error code: ${response.errorCode}`);
      } else {
        console.warn('🔥', response);
        setAvatar(response.assets[0].uri);
      }
    });
  };

  const loadImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        // maxWidth: 100,
        // maxHeight: 100,
      },
      response => {
        const isError = response.errorCode ? true : false;
        if (isError) {
          alert(`error code: ${response.errorCode}`);
        } else {
          console.warn('🔥', response);
          const isCancel = response.didCancel ?? false;
          if (isCancel) {
            return;
          }
          setAvatar(response.assets[0].uri);
        }
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: avatar}} style={{width: '100%', height: 600}} />
      <View style={styles.buttonContainer}>
        <Button title="카메라 촬영 후 가져오기" onPress={() => addImage()} />
        <Button title="사진 가져오기" onPress={() => loadImage()} />
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
};

export default ImagePickerPage;
