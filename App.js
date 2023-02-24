// be carefule installing react native paper bc using expo... change button and align them...

import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [ counter, setCounter ] = useState(0);

  return (
    // similar to div
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button
        onPress={()=>setCounter(counter+1)}
        title='Increment'
      />
      <Button
        onPress={()=>setCounter(counter-1)}
        title='Decrement'
      />
    </View>
  );
}
// react native default flex
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
