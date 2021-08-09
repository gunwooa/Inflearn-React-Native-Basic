import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import {
  getBrand,
  getDevice,
  getDeviceId,
  getDeviceName,
  getFontScale,
  getIpAddress,
  getPowerState,
} from 'react-native-device-info';

const WINDOW_DIMENSTIONS = Dimensions.get('window');
const SCREEN_DIMENSTIONS = Dimensions.get('screen');

function App() {
  const [infos, setInfos] = useState({
    getBrand_: null,
    getDevice_: null,
    getDeviceId_: null,
    getDeviceName_: null,
    getFontScale_: null,
    getIpAddress_: null,
    getPowerState_: null,
  });

  const init = async () => {
    setInfos(prev => {
      return {...prev, getBrand_: getBrand()};
    });
    getDevice().then(device => {
      setInfos(prev => {
        return {...prev, getDevice_: device};
      });
    });
    setInfos(prev => {
      return {...prev, getDeviceId_: getDeviceId()};
    });
    getDeviceName().then(deviceName => {
      setInfos(prev => {
        return {...prev, getDeviceName_: deviceName};
      });
    });
    getFontScale().then(fontScale => {
      setInfos(prev => {
        return {...prev, getFontScale_: fontScale};
      });
    });
    getIpAddress().then(ip => {
      setInfos(prev => {
        return {...prev, getIpAddress_: ip};
      });
    });
    getPowerState().then(state => {
      console.log(state);
      setInfos(prev => {
        return {...prev, getPowerState_: '-'};
      });
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>디바이스 정보 ({Platform.OS})</Text>
      {Object.keys(infos).map(key => {
        const value = infos[key];
        return (
          <View style={styles.contentContainer} key={key}>
            <Text style={styles.nameText}>{key}: </Text>
            <Text style={styles.valueText}>{value}</Text>
          </View>
        );
      })}
      <Text style={[styles.titleText, {marginTop: 20}]}>Dimensions 정보</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>WD font scale: </Text>
        <Text style={styles.valueText}>{WINDOW_DIMENSTIONS.fontScale}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>WD width: </Text>
        <Text style={styles.valueText}>{WINDOW_DIMENSTIONS.width}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>WD height: </Text>
        <Text style={styles.valueText}>{WINDOW_DIMENSTIONS.height}</Text>
      </View>
      <View style={[styles.contentContainer, {marginTop: 10}]}>
        <Text style={styles.nameText}>SD font scale: </Text>
        <Text style={styles.valueText}>{SCREEN_DIMENSTIONS.fontScale}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>SD width: </Text>
        <Text style={styles.valueText}>{SCREEN_DIMENSTIONS.width}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>SD height: </Text>
        <Text style={styles.valueText}>{SCREEN_DIMENSTIONS.height}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 5,
    padding: 5,
    backgroundColor: '#dedede',
  },
  nameText: {
    fontSize: 18,
    color: '#777777',
  },
  valueText: {
    fontSize: 16,
  },
});

export default App;
