import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import gameData from "./gamesdata.json";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const GamesList = () => {
  const navigation = useNavigation();
  const handleGamePress = (game) => {
    navigation.navigate("Detalhes do Jogo", { game });
  };

  const renderGameItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleGamePress(item)}>
      <Text style={styles.gameTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={gameData.table}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default GamesList;
