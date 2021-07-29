import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const User = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
      <Button
        title="To user Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});

export default User;
