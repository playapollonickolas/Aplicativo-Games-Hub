import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles";

// JSON data with usernames and passwords
const users = [
  { username: "admin", password: "admin" },
  { username: "usuario", password: "senha" },
  { username: "username", password: "password" },
];

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    // Find user with matching username and password
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Successful login
      Alert.alert("Login feito com sucesso.", "Bem vindo!");
      navigation.navigate("Home");
    } else {
      // Invalid credentials
      Alert.alert(
        "Login falhou.",
        "Nome de usuário ou senha inválidos. Por favor, verifica suas credenciais e tente novamente."
      );
    }

    // Clear the input fields
    setUsername("");
    setPassword("");
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>GamesHUB</Text>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.loginInput}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.loginInput}
      />
      <Button title="Entrar" onPress={handleLogin} style={styles.button} />

      <View style={styles.credits}>
        <Text style={styles.credits}>Obs: Usuário: usuario, senha: senha.</Text>
        <Text style={styles.credits}>
          Aplicação desenvolvida por Apolo Nicolas e Rodrigo Valois
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
