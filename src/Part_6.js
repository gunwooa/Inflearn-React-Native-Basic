import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ImagePickerPage from './6_phone_resource/ImagePickerPage';
import ContactsPage from './6_phone_resource/ContactsPage';

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Contacts"
        tabBarOptions={{
          activeBackgroundColor: 'skyblue',
          activeTintColor: 'blue',
          inactiveTintColor: '#ffffff',
          style: {
            backgroundColor: '#c6cbef',
          },
          labelPosition: 'below-icon',
        }}>
        <Tab.Screen name="ImagePicker" component={ImagePickerPage} />
        <Tab.Screen name="Contacts" component={ContactsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
