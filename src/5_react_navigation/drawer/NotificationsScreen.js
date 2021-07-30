import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

function NotificationsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default NotificationsScreen;
