import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/5_react_navigation/HomeScreen';
import DetailsScreen from './src/5_react_navigation/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{
            itemId: 11,
            otherParam: '똥',
          }}
          // options={{
          //   title: 'Details Screen',
          //   headerStyle: {
          //     backgroundColor: 'pink',
          //   },
          //   headerTintColor: 'red',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //     color: 'purple',
          //   },
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
