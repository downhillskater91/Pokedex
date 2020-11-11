import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import PokedexSVG from '../images/pokemon-icons/pokedex.svg';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Pokedex Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return(
    <View style={styles.container}>
      <Text>Pokedex Settings!</Text>
    </View>
  );
}

function CreditsScreen() {
  return(
    <View style={styles.container}>
      <Text style={styles.creditItem}>Icon made by Roundicons Freebies from www.flaticon.com</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator(){
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'maroon',
          height: 100,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarLabel: 'Pok\xE9dex',
          tabBarIcon: ({ color, size }) => (
            <PokedexSVG height={45} width={45} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-cog" size={45} color='#D3EFF4' />
          )
        }}
      />
      <Tab.Screen
        name="Credits"
        component={CreditsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-information-circle-outline" size={45} color='#D3EFF4' />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditItem: {
    textAlign: 'center',
  },
});
