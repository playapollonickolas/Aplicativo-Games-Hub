import React from "react";
import { View, Text, Button, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles";
import gameData from "../gamesdata.json";

const DetailsScreen = ({ route }) => {
  const { game } = route.params;

  const navigation = useNavigation();

  const handleDelete = async () => {
    Alert.alert(
      "Função não implementada",
      "A função de deletar um elemento não pode ser implementada com sucesso por conta das restrições de tempo e diversas falhas na IDE utilizada."
    );
    try {
      const storedData = await AsyncStorage.getItem("gamesData");
      if (storedData) {
        const gamesData = JSON.parse(storedData);
        const updatedGames = gamesData.table.filter(
          (item) => item.id !== game.id
        );
        gamesData.table = updatedGames;
        await AsyncStorage.setItem("gamesData", JSON.stringify(gamesData));
        onDelete(game.id);
      }
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  const handleEdit = () => {
    navigation.navigate("Editar Jogo", { game });
  };

  return (
    <View>
      <View style={styles.container}>
        <Text>Titulo: {game.title}</Text>
        <Text>Gênero: {game.genre}</Text>
        <Text>Ano: {game.year}</Text>
        <Text>Descrição: {game.description}</Text>
        <Text>Preço: ${game.price}</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text>Remover</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEdit} style={styles.button}>
          <Text>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsScreen;
