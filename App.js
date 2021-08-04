import React from 'react';
import { StyleSheet, } from 'react-native';
import MainScreen from './src/components/screens/MainScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SubScreen from './src/components/screens/SubScreen';
import BottomTab from './src/components/controller/BottomTab';

export default function App() {

  const Stack = createStackNavigator();

  console.log(BottomTab)

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'My first page' }} />
        <Stack.Screen name="SubScreen" component={SubScreen} />
        <Stack.Screen name="Third" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
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

