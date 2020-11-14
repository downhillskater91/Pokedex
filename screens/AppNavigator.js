import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PokemonScreen from './PokemonScreen';
import PokemonDetails from './PokemonDetails';

import Ionicons from 'react-native-vector-icons/Ionicons';
import PokeballsSVG from '../images/pokemon-icons/pokeballs.svg';
import PikachuSVG from '../images/pokemon-icons/pikachu-2.svg';

function ItemsScreen() {
  return(
    <View style={styles.container}>
      <Text>Pokemon Items!</Text>
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
const Stack = createStackNavigator();

const PokemonStructure = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'snow',
        headerStyle: {
          backgroundColor: 'crimson',
          borderBottomWidth: 2,
          borderBottomColor: 'black',
        },
      }}
    >
      <Stack.Screen 
        name={"Pok\xE9mon"}
        component={PokemonScreen}
      />
      <Stack.Screen
        name={"Details"}
        component={PokemonDetails}
        options={({ route }) => ({ title: route.params.pokemon.name })}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator(){
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'crimson',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 13,
        },
        style: {
          backgroundColor: 'snow',
          height: 100,
          borderTopColor: 'black',
          borderTopWidth: 2,
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={PokemonStructure} 
        options={{
          tabBarLabel: 'Pok\xE9mon',
          tabBarIcon: ({ color, size }) => (
            <PikachuSVG height={40} width={40} />
          ),
        }}
      />
      <Tab.Screen 
        name="Items" 
        component={ItemsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <PokeballsSVG height={40} width={40} />
          )
        }}
      />
      <Tab.Screen
        name="Credits"
        component={CreditsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-information-circle-outline" size={45} color='gray' />
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
