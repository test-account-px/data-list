import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Colors from '@pxblue/colors'
import { Header, ListItem } from 'react-native-elements';
const data = [{
  name: "George Washington",
  value: 1789,
}, {
  name: "Jhon Adams",
  value: 1796,
},{
  name: "Thomas Jefferson",
  value: 1800,
}, {
  name: "James Madison",
  value: 1808,
}, {
  name: "James Monore",
  value: 1812,
}, ]
export default function App() {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor={Colors.blue[500]}
        centerComponent={{ text: 'Simple List', style: { color: '#fff', fontSize: 18, } }}
      />
      {
        data.map((item, index) => (
          <ListItem
            key={index}
            title={item.name}
            rightTitle={`${item.value}`}
          />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
