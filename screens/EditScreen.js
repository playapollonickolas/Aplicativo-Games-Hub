import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles";

import gameData from "../gamesdata.json";

const EditScreen = ({ route, onUpdate }) => {
  const { game } = route.params;

  const [title, setTitle] = useState(game.title);
  const [genre, setGenre] = useState(game.genre);
  const [year, setYear] = useState(game.year);
  const [price, setPrice] = useState(game.price);
  const [description, setDescription] = useState(game.description);

  const navigation = useNavigation();

  const handleUpdate = async () => {
    const updatedGame = { ...game, title, genre, year, price };

    Alert.alert(
      "Função ainda não implementada",
      "A função de editar um elemento não pode ser implementada com sucesso por conta das restrições de tempo e diversas falhas na IDE utilizada."
    );

    try {
      const storedData = await AsyncStorage.getItem("gamesData");
      if (storedData) {
        const gamesData = JSON.parse(storedData);
        const updatedGames = gamesData.table.map((item) =>
          item.id === game.id ? updatedGame : item
        );
        gamesData.table = updatedGames;
        await AsyncStorage.setItem("gamesData", JSON.stringify(gamesData));
        onUpdate(updatedGame);
      }
    } catch (error) {
      console.error("Error updating game:", error);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Gênero" value={genre} onChangeText={setGenre} />
      <TextInput
        placeholder="Ano"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Salvar" onPress={handleUpdate} />
    </View>
  );
};

export default EditScreen;
