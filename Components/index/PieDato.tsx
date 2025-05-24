import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Usar props en react native dentro de la funcion principal con Javascript
export default function PieDato(props: any) {
  return (
    <View>
        {/* Usar dato que declaramos en componente padre */}
      <Text>Año actual: {props.date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})