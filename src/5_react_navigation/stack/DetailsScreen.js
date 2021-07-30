import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function DetailsScreen({route, navigation}) {
  const {itemId} = route.params;
  const {otherParam} = route.params;

  const headerStyleInit = () => {
    navigation.setOptions({
      title: 'Details Screen',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'green',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'yellow',
      },
      headerBackTitle: 'BACK',
      headerBackTitleVisible: false,
    });
  };

  useEffect(() => {
    console.log('뽝');

    headerStyleInit();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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

export default DetailsScreen;
