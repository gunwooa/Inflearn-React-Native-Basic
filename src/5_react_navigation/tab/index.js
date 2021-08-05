import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image} from 'react-native';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import MessageScreen from './MessageScreen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Icon = {
  Home: 'home-outline',
  User: 'people-outline',
  Message: 'mail-outline',
};

const TabBarIcon = (focused, name) => {
  return <Ionicons name={Icon[name]} size={focused ? 30 : 20} />;
};

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: 'skyblue',
        activeTintColor: 'blue',
        inactiveTintColor: '#ffffff',
        style: {
          backgroundColor: '#c6cbef',
        },
        labelPosition: 'below-icon',
      }}
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
