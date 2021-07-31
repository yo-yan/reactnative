import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import Greeting from './src/components/Greeting'
import Counter from './src/components/Counter'

export default function App() {

  const [text, setText] = useState('')
  const [message, setMessage] = useState('')

  const onClick = () => {
    const str = `こんにちは！${text}さん`
    setMessage(str)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <Button onPress={onClick} title='click!' />
      <Text>{message}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://picsum.photos/id/1035/367/267"
        }} />
      <Text>Open up App.js to start working on your app!!!!!yoyan</Text>
      <Greeting text="Hello world" />
      <StatusBar style="auto" />
      <Counter />
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
  tinyLogo: {
    width: 100,
    height: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
