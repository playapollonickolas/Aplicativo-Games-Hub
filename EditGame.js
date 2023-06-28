import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import data from "./gamesdata.json";

const EditGame = ({ itemId }) => {
  const [formData, setFormData] = useState({
    title: data[itemId].title,
    genre: data[itemId].genre,
    year: data[itemId].year.toString(),
    price: data[itemId].price.toString(),
  });

  const handleSubmit = () => {
    const updatedData = [...data];
    updatedData[itemId] = {
      ...updatedData[itemId],
      title: formData.title,
      genre: formData.genre,
      year: parseInt(formData.year),
      price: parseFloat(formData.price),
    };

    console.log(updatedData); // Replace with your logic to update the JSON file

    // Reset form data
    setFormData({
      title: "",
      genre: "",
      year: "",
      price: "",
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={formData.title}
        onChangeText={(text) => setFormData({ ...formData, title: text })}
      />
      <TextInput
        placeholder="Genre"
        value={formData.genre}
        onChangeText={(text) => setFormData({ ...formData, genre: text })}
      />
      <TextInput
        placeholder="Year"
        value={formData.year}
        onChangeText={(text) => setFormData({ ...formData, year: text })}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Price"
        value={formData.price}
        onChangeText={(text) => setFormData({ ...formData, price: text })}
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
};

export default EditGame;
