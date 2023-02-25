// Counter app using react-native-paper and react-native components

import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export default function App() {
  const [ counter, setCounter ] = useState(0);

  return (
    <>
      {/* SafeAreaView is a component that wraps the app and makes sure that the content is not covered by the device status bar or notches. */}
      <SafeAreaView style={styles.container}>
        {/* StatusBar is a component that wraps the app and makes sure that the content is not covered by the device status bar or notches. */}
        <StatusBar barStyle="dark-content" />
        {/* View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. */}
        <View style={styles.row}>
          {/* Text is a React component for displaying text. */}
          <Text style={styles.titleText}>Counter App</Text>
        </View>

        <View style={styles.row}>
          <Text>{counter}</Text>
        </View>
        
        <View style={styles.parent}>
          {/* Button is a component from react-native-paper */}
          <Button
            theme={{ roundness: 3 }}
            mode="outlined"
            icon="minus"
            compact="true"
            onPress={()=>setCounter(counter-1)}
            title='Decrement'
          >Decrement</Button>
          <Button
            //uncomment to see how theme changes default react-native-paper button theme
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

// Stylesheet is a component from react-native. By default uses flexbox layout.
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
