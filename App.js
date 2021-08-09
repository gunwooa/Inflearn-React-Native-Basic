import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

import Part_4 from './src/Part_4';
import Part_5 from './src/Part_5';
import Part_6 from './src/Part_6';
import Part_8 from './src/Part_8';

const tabButtons = {
  part4: {
    name: 'Part 4. RN Component',
  },
  part5: {
    name: 'Part 5. React Navigation',
  },
  part6: {
    name: 'Part 6. Phone Resource',
  },
  part8: {
    name: 'Part 8. Good To Know Things',
  },
};

function App() {
  const [tab, setTab] = useState('part4');

  const renderTabView = tabKey => {
    if (tabKey === 'part4') {
      return <Part_4 />;
    } else if (tabKey === 'part5') {
      return <Part_5 />;
    } else if (tabKey === 'part6') {
      return <Part_6 />;
    } else if (tabKey === 'part8') {
      return <Part_8 />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topViewContainer}>
        {Object.keys(tabButtons).map(key => {
          const {name} = tabButtons[key];
          const backgroundColor = tab === key ? 'red' : '#dedede';

          return (
            <View style={styles.tabButtonWrap} key={key}>
              <TouchableOpacity
                style={[styles.tabButtonWrap, {backgroundColor}]}
                onPress={() => setTab(key)}>
                <Text>{name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.bottomViewContainer}>{renderTabView(tab)}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topViewContainer: {
    ...Platform.select({
      ios: {
        backgroundColor: 'blue',
      },
      android: {
        backgroundColor: 'pink',
      },
    }),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tabButtonWrap: {
    padding: 5,
    marginRight: 5,
  },
  bottomViewContainer: {
    flex: 1,
  },
});

export default App;
