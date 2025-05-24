import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function Details() { 

  const params = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'detalles de ' + params.name
        }}
      />
      <View>
        <Text>Detalles</Text>
        <Text>Tu nombre es: {params.name}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
