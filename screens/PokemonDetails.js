import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default class PokemonDetails extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}}>
        <Image style={styles.sprite} source={{uri: this.props.route.params.pokemon.sprite}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
  },
  sprite: {
    height: 300,
    width: 300,
    margin: 15,
  },
});