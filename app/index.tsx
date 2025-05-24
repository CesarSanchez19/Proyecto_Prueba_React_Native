import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import PiePagina2 from "@/Components/index/PiePagina2";

export default function Index() {
  const [user, setUser] = useState('');
  const [pw, setPw] = useState('');

  const login = () => {
    if (user === '' || pw === '') {
      alert('Favor de completar todos los campos');
    } else {
      if (user === 'admin' && pw === '123') {3
        router.push('/(tabs)/home');
      } else {
        alert('Usuario y contraseña incorrectos');
      }
    }
  };

  const router = useRouter();

  return (
    <ScrollView>
      <View style={styles.contendorPrincipal}>
        <View>
          <Text style={styles.titulo}>HOLA 👋🏻, BIENVENIDO NUEVAMENTE </Text>
          <Text style={{ textAlign: 'center', fontSize: 25, color: '#129990', fontWeight: 'bold', marginTop: 25 }}>
            Inicie sesión para continuar
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su nombre de usuario"
              placeholderTextColor="#999"
              value={user}
              onChangeText={setUser}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su contraseña"
              placeholderTextColor="#999"
              value={pw}
              onChangeText={setPw}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <View style={styles.contenedorbutton}>
            <TouchableOpacity onPress={login} style={styles.button1}>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contenedorbutton}>
            <TouchableOpacity onPress={() => router.push('/crearcuenta')} style={styles.button2}>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
                Crear Cuenta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <PiePagina2 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contendorPrincipal: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#096B68',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5,
    color: '#096B68',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 18,
    margin: 5,
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#096B68',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  contenedorbutton: {
    marginTop: 10,
    padding: 10,
  },
  button1: {
    backgroundColor: '#096B68',
    padding: 15,
    borderRadius: 30,
    width: 160,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button2: {
    backgroundColor: '#129990',
    padding: 15,
    borderRadius: 30,
    width: 160,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
