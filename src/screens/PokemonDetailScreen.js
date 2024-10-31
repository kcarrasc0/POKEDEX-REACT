import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetailScreen = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text>Type: {pokemon.type}</Text>
      <Text>Abilities: {pokemon.abilities.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 16 },
  image: { width: 100, height: 100 },
  name: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
});

export default PokemonDetailScreen;
