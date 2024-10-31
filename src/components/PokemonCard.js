import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PokemonCard = ({ pokemon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { padding: 10, backgroundColor: '#f2f2f2', borderRadius: 8, marginBottom: 10 },
  image: { width: 50, height: 50 },
  name: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
});

export default PokemonCard;
