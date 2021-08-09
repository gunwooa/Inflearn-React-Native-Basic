import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, StyleSheet, Platform} from 'react-native';
import {
  getBrand,
  getDevice,
  getDeviceId,
  getDeviceName,
  getFontScale,
  getIpAddress,
  getPowerState,
} from 'react-native-device-info';

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
      <Text style={styles.infoText}>디바이스 정보 ({Platform.OS})</Text>
      {Object.keys(infos).map(key => {
        const value = infos[key];
        return (
          <View style={styles.infoContainer} key={key}>
            <Text style={styles.nameText}>{key}: </Text>
            <Text style={styles.valueText}>{value}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 5,
    backgroundColor: '#dedede',
  },
  nameText: {
    flex: 2,
    fontSize: 18,
    color: '#777777',
  },
  valueText: {
    flex: 1,
    fontSize: 16,
  },
});

export default App;
