import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Header = ({name}) => (
  <TouchableOpacity style={styles.header} onPress={() => alert('hello world')}>
    <View>
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 5,
    width: '100%',
    backgroundColor: 'pink',
  },
});

export default Header;
