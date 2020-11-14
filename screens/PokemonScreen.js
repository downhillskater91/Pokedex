import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, 
  FlatList, SafeAreaView, Image, 
  TextInput, TouchableOpacity
} from 'react-native';

import { getAllPokemonAsync } from '../requests/pokemonApi';

class PokemonCard extends PureComponent {
  render() {
    return (
      <TouchableOpacity style={styles.pokemonCard}
        onPress={() => this.props.getPokemonDetails(this.props.pokemon)}
      >
        <Text style={styles.cardTitle}>{this.props.pokemon.id}</Text>
        <Image style={styles.cardSprite} source={{uri: this.props.pokemon.sprite}} />
        <Text style={styles.cardTitle}>{this.props.pokemon.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default class PokemonScreen extends React.Component {
  state = {
    allPokemon: [],
    filteredPokemon: [],
    search: "",
  };

  // On mount, load the pokemon
  componentDidMount() {
    this.fetchAllPokemonAsync();
  }

  // Grab all the pokemon to populate the FlatList using PokeAPI
  fetchAllPokemonAsync = async () => {
    const pokemon = await getAllPokemonAsync();

    this.setState({ 
      allPokemon: pokemon,
      filteredPokemon: pokemon,
    });
  }

  // Render the pokemon card for the FlatList
  renderPokemonCard = ({ item }) => (
    <PokemonCard pokemon={item} getPokemonDetails={(id) => this.getPokemonDetails(id)} />
  );

  // When a pokemon card is selected, open the details screen
  getPokemonDetails = (pokemon) => {
    this.props.navigation.navigate('Details', {pokemon});
  }

  // Update search state variable
  handleSearchChange = (search) => {
    this.setState({ 
      search,
      filteredPokemon: this.state.allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())),
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput 
          style={styles.search}
          name="Search"
          placeholder="Search..."
          onChangeText={this.handleSearchChange}
        />
        <FlatList 
          style={styles.listContainer}
          contentContainerStyle={{alignItems: 'center'}}
          data={this.state.filteredPokemon}
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
    backgroundColor: 'snow',//'blanchedalmond',
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 32,
  },
  search: {
    backgroundColor: 'blanchedalmond', //'beige',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    margin: 15,
    marginTop: 10,
    paddingHorizontal: 15,
    fontSize: 24,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
    padding: 10,
  },
  pokemonCard: {
    alignItems: 'center',
    margin: 10,
    width: 115,
    backgroundColor: 'blanchedalmond', //'beige',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 15,
  },
  cardSprite: {
    width: 75,
    height: 75,
    marginVertical: 15,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});