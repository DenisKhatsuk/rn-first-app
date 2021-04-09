import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const initialText = 'Open up App.js to start working on your app!';
  const newText = 'Text has changed!';
  const [outputText, setOutputText] = useState(initialText);
  return (
    <View style = {styles.container}>
      <Text>{ outputText }</Text>
      <Button 
        onPress = { () => setOutputText(newText) }
        title = "Change Text"/>
      <StatusBar style = "auto" />
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
});

export default App;