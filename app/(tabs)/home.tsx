import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function home() {

  const persona = [
    { nombre: 'Marce' },
    { nombre: 'Juan' },
    { nombre: 'Pedro' }
  ]

  

  return (
    <View>

      <Text>
        Alumno: Marce ...
      </Text>

      <Link
      href={{
        pathname: '/details',
        params: { name: 'Marce' }
      }} 
      > ver mas 
      </Link>

      <Text>
        Alumno: David ...
      </Text>

      <Link
      href={{
        pathname: '/details',
        params: { name: 'David' }
      }} 
      > ver mas </Link>

      <Text>
        Alumno Juan ...
      </Text>

      <Link
      href={{
        pathname: '/details',
        params: { name: 'Juan' }
      }} 
      > ver mas </Link>

    </View>
  )
}

const styles = StyleSheet.create({})