import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function CrearUsuario() {
  const router = useRouter();
  return (
    <ScrollView>
      <View style={styles.contendorPrincipal}>
        <View>
          <Text style={styles.titulo}>BIENVENIDO/A</Text>
          <Text style={{ textAlign: 'center', fontSize: 25, color: '#129990', fontWeight: "bold", marginTop: 25, }}>Crear nueva cuenta de usuario </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre de Usuario</Text>
            <TextInput style={styles.input} placeholder="Cree un nombre de usuario" placeholderTextColor="#999" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} placeholder="Ingrese su nombre" placeholderTextColor="#999" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Apellido</Text>
            <TextInput style={styles.input} placeholder="Ingrese su apellido" placeholderTextColor="#999" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su correo electrónico"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput style={styles.input} placeholder="Ingrese su número telefónico" placeholderTextColor="#999" keyboardType="phone-pad" />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Cree una contraseña segura"
              placeholderTextColor="#999"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Repita su contraseña"
              placeholderTextColor="#999"
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <View style={styles.contenedorbutton}>
            <TouchableOpacity style={styles.button1}>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Crear Cuenta</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contenedorbutton}>
              <TouchableOpacity onPress={()=>router.push('/')} style={styles.button2}>
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Iniciar Sesion</Text>
              </TouchableOpacity>
          </View>
        </View>

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
    padding: 8,
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
