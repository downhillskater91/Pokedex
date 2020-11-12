import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView, Image } from 'react-native';

import { getAllPokemonAsync } from '../requests/pokemonApi';

class PokemonCard extends PureComponent {
  render() {
    return (
      <View style={styles.pokemonCard}>
        <Image style={styles.cardSprite} source={{uri: this.props.pokemon.sprite}} />
        <Text style={styles.cardTitle}>{this.props.pokemon.name}</Text>
      </View>
    );
  }
}

export default class PokemonScreen extends React.Component {
  state = {
    pokemon: [],
  };

  componentDidMount() {
    this.fetchAllPokemonAsync();
  }

  fetchAllPokemonAsync = async () => {
    const pokemon = await getAllPokemonAsync();

    this.setState({ 
      pokemon: pokemon
    });
  }

  renderPokemonCard = ({ item }) => (
    <PokemonCard pokemon={item} />
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{'Pok\xE9mon'}</Text>
        </View>
        <FlatList 
          style={styles.listContainer}
          contentContainerStyle={{alignItems: 'center'}}
          data={this.state.pokemon}
          renderItem={this.renderPokemonCard}
          keyExtractor={item => item.id}
          initialNumToRender={20}
          numColumns={3}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 32,
  },
  listContainer: {
    flex: 1,
    padding: 10,
    marginVertical: 10,
  },
  pokemonCard: {
    alignItems: 'center',
    margin: 10,
    width: 115,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 15,
  },
  cardSprite: {
    width: 100,
    height: 100,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});