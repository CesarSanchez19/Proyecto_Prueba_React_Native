import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PieDato from './PieDato';

export default function PiePagina2() {
// Como hacer props en react native con Javascript
const [years, setYears] = React.useState('2025');

  return (
    <View>
        <Text>Copyright@2025 MCL</Text>
        {/* Llama el componente hijo */}
        <PieDato
        // Pasar el dato a un componente hijo
        date={years}        
        />
    </View>
  )
}

const styles = StyleSheet.create({})