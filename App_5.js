import React, {useState} from 'react';
import {View, SafeAreaView, Button, StyleSheet} from 'react-native';
import StackNavigation from './src/5_react_navigation/stack';
import DrawerNavigation from './src/5_react_navigation/drawer';

const tabButtons = {
  stack: {
    name: 'Stack',
    color: 'red',
  },
  drawer: {
    name: 'Drawer',
    color: 'red',
  },
};

function App() {
  const [tab, setTab] = useState('drawer');

  const renderTabView = tabKey => {
    if (tabKey === 'stack') {
      return <StackNavigation />;
    } else if (tabKey === 'drawer') {
      return <DrawerNavigation />;
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {Object.keys(tabButtons).map(key => {
          const {name, color} = tabButtons[key];

          return (
            <View style={styles.tabButtonWrap} key={key}>
              <Button color={color} title={name} onPress={() => setTab(key)} />
            </View>
          );
        })}
      </SafeAreaView>

      {renderTabView(tab)}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#cecece',
  },
  tabButtonWrap: {
    marginRight: 10,
  },
});

export default App;
