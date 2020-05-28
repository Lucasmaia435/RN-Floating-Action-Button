import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FloatingActionButton from '@lucasmrc435/rn-fab';


export default function App() {
  let [count,setCount] = useState(0);
  
  const increment = () => {
    let i = count;
    i++;
    setCount(i);
  }
  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Counter
      </Text>
      
      <Text>
        You've clicked {count} times.
      </Text>

      <FloatingActionButton onPress={increment} color="orange"></FloatingActionButton>
      <FloatingActionButton onPress={increment} position="center"></FloatingActionButton>
      <FloatingActionButton onPress={increment} position="left" icon="wallet"></FloatingActionButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center'
  },
  
});
