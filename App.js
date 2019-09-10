import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as Colors from '@pxblue/colors'
import { Header, ListItem } from 'react-native-elements';
const data = [{
  name: "George Washington",
  value: 1789,
}, {
  name: "John Adams",
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
        centerComponent={{ text: 'Simple List', style: { color: '#fff', fontSize: 16, } }}
      />
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => (
          <ListItem
            title={item.name}
            rightTitle={`${item.value}`}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
