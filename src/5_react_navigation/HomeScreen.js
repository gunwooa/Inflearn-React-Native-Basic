import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, Button, StyleSheet} from 'react-native';
import LogoTitle from './LogoTitle';

function HomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Home Screen',
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button
          title="상세로ㅋ"
          onPress={() => navigation.navigate('Details')}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="header bar 이름 수정!!"
        onPress={() =>
          navigation.setOptions({
            title: '안뇽~',
            headerStyle: {
              backgroundColor: 'pink',
            },
            headerTintColor: 'red',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});

export default HomeScreen;
