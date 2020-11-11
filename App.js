import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './screens/AppNavigator.js'

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style='dark' />
    </NavigationContainer>
  );
}