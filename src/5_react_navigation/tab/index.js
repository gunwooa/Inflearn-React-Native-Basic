import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image} from 'react-native';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import MessageScreen from './MessageScreen';

const Icon = {
  Home: require('../../../assets/home.png'),
  User: require('../../../assets/user.png'),
  Message: require('../../../assets/messenger.png'),
};

const TabBarIcon = (focused, name) => {
  const styles = {
    width: focused ? 30 : 20,
    height: focused ? 30 : 20,
  };
  return <Image source={Icon[name]} style={styles} />;
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
