import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Colors from '@pxblue/colors'
import { Header, ListItem } from 'react-native-elements';
const data = [{
  name: "John",
  value: 123,
}, {
  name: "Bob",
  value: 456,
}]
export default function App() {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor={Colors.blue[500]}
        centerComponent={{ text: 'Empty States', style: { color: '#fff', fontSize: 16, } }}
      />
      {
        data.map((item, index) => (
          <ListItem
            key={index}
            title={item.name}
            rightTitle={item.value}
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
