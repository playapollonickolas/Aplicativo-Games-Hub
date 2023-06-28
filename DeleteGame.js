import React from "react";
import { View, Text, Button } from "react-native";

const DeleteGame = ({ item, onRemove }) => {
  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <View>
      <Text>Title: {item.title}</Text>
      <Text>Genre: {item.genre}</Text>
      <Text>Year: {item.year}</Text>
      <Text>Price: {item.price}</Text>
      <Button
        title="Delete"
        onPress={handleRemove}
        style={styles.deleteButton}
      />
    </View>
  );
};

export default DeleteGame;
