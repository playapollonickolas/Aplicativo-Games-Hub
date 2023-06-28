import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import data from "./gamesdata.json";

const GamesForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    year: "",
    price: "",
  });

  const [nextId, setNextId] = useState(data.length + 1);

  const handleSubmit = () => {
    const newFormData = {
      id: nextId,
      title: formData.title,
      genre: formData.genre,
      year: formData.year,
      price: formData.price,
    };

    const updatedData = [...data, newFormData];

    console.log(updatedData); // Replace with your logic to write the data to the JSON file

    // Reset form data and increment nextId
    setFormData({
      title: "",
      genre: "",
      year: "",
      price: "",
    });
    setNextId(nextId + 1);
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default GamesForm;
