import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  Image,
  StyleSheet,
  Linking,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import reactImgSrc from '../../../assets/react.png';

const MyDrawer = ({navigation}) => {
  const renderDrawerList = () => {
    const items = {
      home: {
        name: 'Home',
        onPress: () =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Home',
            }),
          ),
      },
      notifications: {
        name: 'Notifications',
        onPress: () =>
          navigation.dispatch(
            CommonActions.navigate({
              name: 'Notifications',
            }),
          ),
      },
      google: {
        name: 'Google',
        onPress: () => Linking.openURL('https://www.google.co.kr/'),
      },
      help: {
        name: 'Help',
        onPress: () => alert('Link to help'),
      },
    };
    return (
      <View style={styles.drawerList}>
        {Object.keys(items).map(key => {
          const item = items[key];
          return (
            <View key={key}>
              <Text style={styles.draweritems} onPress={item.onPress}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image source={reactImgSrc} style={{width: 40, height: 40}} />
          </View>
        </View>
        <Text style={styles.sectionText}>Section 1</Text>
        {renderDrawerList()}
      </ScrollView>
      <View style={{paddingLeft: 10, paddingBottom: 30}}>
        <Text>Copyright @ 건우, 2021.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionText: {
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
  },
  drawerList: {
    padding: 1,
    backgroundColor: 'black',
  },
  draweritems: {
    padding: 10,
    backgroundColor: 'skyblue',
    color: 'white',
  },
});

export default MyDrawer;
