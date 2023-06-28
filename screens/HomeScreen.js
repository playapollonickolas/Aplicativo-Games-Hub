import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import styles from "../styles";

import GamesList from "../GamesList";
import GamesForm from "../GamesForm";

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.title}>GameHub</Text>
        </View>

        <View styles={styles.container}>
          <Text style={styles.subtitle}>Lista de Jogos</Text>
          <Text style={styles.info}>
            Clique em um dos jogos para ver as informações detalhadas.
          </Text>
          <View style={styles.list}>
            <GamesList />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
