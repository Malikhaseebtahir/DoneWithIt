import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: 'black',
      flex: 1,
      flexDirection: "row", 
      justifyContent: "center", // primary axix > Horizontal axix
      alignItems: 'center', // secondary axix => Vertical axix
    }}>
      <View style={{
        backgroundColor: 'red',
        width: 100,
        height: 100,
      }}/>

      <View style={{
        backgroundColor: 'white',
        width: 100,
        height: 100,
        position: 'absolute',
        top: 20,
        left: 20
      }}/>

      <View style={{
        backgroundColor: 'green',
        width: 100,
        height: 100
      }}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
