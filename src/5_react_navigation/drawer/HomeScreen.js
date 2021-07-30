import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
