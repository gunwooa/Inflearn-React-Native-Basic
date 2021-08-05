import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default HomeScreen;
