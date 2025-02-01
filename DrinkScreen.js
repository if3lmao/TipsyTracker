import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const DrinkScreen = () => {
  // State to track drink quantities
  const [quantities, setQuantities] = useState({
    cocktail: 4,
    beer: 4,
    liquor: 4,
    seltzer: 4,
  });

  // Function to handle button press (decrement count)
  const handlePress = (drink) => {
    setQuantities((prev) => ({
      ...prev,
      [drink]: prev[drink] > 0 ? prev[drink] - 1 : 0, // Prevent negative values
    }));
  };

  return (
    <View style={styles.container}>
      {/* Grid Layout */}
      <View style={styles.grid}>
        {/* Cocktail */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("cocktail")}>
          <Image source={require("./drinks/cocktail.png")} style={styles.image} />
          <Text style={styles.text}>Cocktail</Text>
          <Text style={styles.quantity}>Available: {quantities.cocktail}kg</Text>
        </TouchableOpacity>

        {/* Beer */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("beer")}>
          <Image source={require("./drinks/beer.png")} style={styles.image} />
          <Text style={styles.text}>Beer</Text>
          <Text style={styles.quantity}>Available: {quantities.beer}kg</Text>
        </TouchableOpacity>

        {/* Liquor */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("liquor")}>
          <Image source={require("./drinks/liquor.png")} style={styles.image} />
          <Text style={styles.text}>Liquor</Text>
          <Text style={styles.quantity}>Available: {quantities.liquor}kg</Text>
        </TouchableOpacity>

        {/* Seltzer */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("seltzer")}>
          <Image source={require("./drinks/seltzer.png")} style={styles.image} />
          <Text style={styles.text}>Seltzer</Text>
          <Text style={styles.quantity}>Available: {quantities.seltzer}kg</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A8E6A3",
  },
  grid: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    margin: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3, // Shadow effect
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 14,
    color: "gray",
  },
});

export default DrinkScreen;
