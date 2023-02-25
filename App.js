// be carefule installing react native paper bc using expo... change button and align them...

import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export default function App() {
  const [ counter, setCounter ] = useState(0);

  return (
    <>
      
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.row}>
          <Text style={styles.titleText}>Counter App</Text>
        </View>

        <View style={styles.row}>
          <Text>{counter}</Text>
        </View>
        
        <View style={styles.parent}>
          <Button
            theme={{ roundness: 3 }}
            mode="outlined"
            icon="minus"
            compact="true"
            onPress={()=>setCounter(counter-1)}
            title='Decrement'
          >Decrement</Button>
          <Button
            //theme={{ roundness: 3 }}
            style={styles}
            mode="outlined"
            icon="plus"
            compact="true"
            onPress={()=>setCounter(counter+1)}
            title='Increment'
          >Increment</Button>
        </View>

      </SafeAreaView>
    </>
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
  parent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
