import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './5_react_navigation/stack';
import DrawerNavigation from './5_react_navigation/drawer';
import TabNavigation from './5_react_navigation/tab';

const tabButtons = {
  stack: {
    name: 'Stack',
  },
  drawer: {
    name: 'Drawer',
  },
  tab: {
    name: 'Tab',
  },
};

function App() {
  const [tab, setTab] = useState('tab');

  const renderTabView = tabKey => {
    if (tabKey === 'stack') {
      return <StackNavigation />;
    } else if (tabKey === 'drawer') {
      return <DrawerNavigation />;
    } else if (tabKey === 'tab') {
      return <TabNavigation />;
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {Object.keys(tabButtons).map(key => {
          const {name} = tabButtons[key];

          const backgroundColor = tab === key ? 'red' : '#dedede';

          return (
            <View style={styles.tabButtonWrap} key={key}>
              <TouchableOpacity
                style={[styles.tabButtonWrap, {backgroundColor}]}
                // style={{...styles.tabButtonWrap, backgroundColor}}
                onPress={() => setTab(key)}>
                <Text>{name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </SafeAreaView>
      <NavigationContainer>{renderTabView(tab)}</NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'pink',
      },
    }),
  },
  tabButtonWrap: {
    padding: 5,
    marginRight: 5,
  },
});

export default App;
