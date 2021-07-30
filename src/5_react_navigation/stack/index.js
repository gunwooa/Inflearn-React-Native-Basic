import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="float"
        mode="modal"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'pink',
          },
          headerTintColor: 'red',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'purple',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{
            itemId: 11,
            otherParam: '똥',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
