import React, {useState} from 'react';
import Contacts from 'react-native-contacts';
import {
  Platform,
  PermissionsAndroid,
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

function ContactsPage() {
  // console.log('🔥', Contacts);

  const getContacts = () => {
    Contacts.getAll()
      .then(contacts => {
        console.warn(contacts);
      })
      .catch(e => {
        console.warn(e);
      });
  };

  const reqContactPermission = async () => {
    if (Platform.OS === 'ios') {
      console.warn('IOS');
      getContacts();
    } else {
      console.warn('Android');
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      })
        .then(() => {
          getContacts();
        })
        .catch(e => {
          console.warn(e);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text>안뇽</Text>
      <Button title="전화번호 불러오기" onPress={reqContactPermission} />
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

export default ContactsPage;
