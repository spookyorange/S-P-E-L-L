/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import OneLetterGame from './src/components/OneLetterGame';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          style={styles.sectionContainer}
          options={{title: 'Welcome to S-P-E-L-L'}}
        />
        <Stack.Screen
          name="OneLetterGame"
          component={OneLetterGame}
          style={styles.sectionContainer}
          options={{title: 'One Letter Game'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: '#000',
    text: '#fff',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
