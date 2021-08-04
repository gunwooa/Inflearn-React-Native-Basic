import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import CustomDrawerContent from './CustomDrawerContent';
import MyDrawer from './MyDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerType="front"
        drawerPosition="right"
        drawerStyle={styles.drawerContainer}
        drawerContentOptions={{
          activeTintColor: 'red',
          activeBackgroundColor: 'black',
        }}
        // drawerContent={props => <CustomDrawerContent {...props} />}
        drawerContent={props => <MyDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {backgroundColor: 'pink', width: 200},
});
