// Counter app using react-native-paper and react-native components to increment and decrement the displayed counter state variable.
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export default function App() {
  const [ counter, setCounter ] = useState(0);

  return (
    <>
      {/* SafeAreaView component adjust padding and margins to avoid content overlapping the status bar and notches.  */}
      <SafeAreaView style={styles.container}>
        {/* StatusBar component is used to change the status bar color and style. By default it is set to light-content. */}
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
            // theme attribute is used to change the default theme of react-native-paper button
            theme={{ roundness: 3 }}
            // mode attribute is used to change the default mode of react-native-paper button
            mode="outlined"
            // icon attribute is used to add an icon to the button
            icon="minus"
            // compact attribute is used to make the button smaller for when buttons on the same row
            compact="true"
            // onPress attribute contains an anonymous function that calls the setCounter function to increment the counter
            onPress={()=>setCounter(counter-1)}
          >Decrement</Button>
          <Button
            //uncomment to see how theme changes default react-native-paper button theme
            //theme={{ roundness: 3 }}
            style={styles}
            mode="outlined"
            icon="plus"
            compact="true"
            onPress={()=>setCounter(counter+1)}
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
