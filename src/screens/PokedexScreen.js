import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import PokemonCard from '../components/PokemonCard';
import { fetchPokemonList } from '../services/api';

const PokedexScreen = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fetchPokemonList();
      setPokemons(data);
    };
    loadPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Pokémon"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={pokemons.filter(pokemon => pokemon.name.includes(search.toLowerCase()))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PokemonCard pokemon={item} onPress={() => navigation.navigate('PokemonDetail', { pokemon: item })} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  searchInput: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 },
});

export default PokedexScreen;
