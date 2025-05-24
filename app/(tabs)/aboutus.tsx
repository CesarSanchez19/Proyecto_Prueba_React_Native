import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/181114153?v=4' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Cesar David Sanchez Trejo</Text>
        <Text style={styles.info}>TIDSM51</Text>
        <Text style={styles.info}>Desarrollo Multiplataforma</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  card: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});
