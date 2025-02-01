import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from "react-native";


const ProfileScreen = () => {
    const [name, setName] = useState("John Doe")
    const [username, setUsername] = useState("johndoe123")
    const [email, setEmail] = useState("johnd@example.com")
    const [age, setAge] = useState("23")
    const [weight, setWeight] = useState("140 lbs")
    const [height, setHeight] = useState("5'11")

    return (
        <ScrollView style={styles.container}>
            {/* Profile Image */}
            <View style={styles.imageContainer}>
                <Image
                    style={styles.profileImage}
                />

                {/* Editable Fields */}
                <View style={styles.infoContainer}>
                    <Text style = {styles.label}>Name:</Text>
                    <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" />

                    <Text style = {styles.label}>Username:</Text>
                    <TextInput style={styles.input} value={username} onChangeText={setUsername} placeholder="Enter your username" />

                    <Text style = {styles.label}>Email:</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter your email" />

                    <Text style = {styles.label}>Age:</Text>
                    <TextInput style={styles.input} value={age} onChangeText={setAge} placeholder="Enter your age" />

                    <Text style = {styles.label}>Weight:</Text>
                    <TextInput style={styles.input} value={weight} onChangeText={setWeight} placeholder="Enter your weight" />

                    <Text style = {styles.label}>Height:</Text>
                    <TextInput style={styles.input} value={height} onChangeText={setHeight} placeholder="Enter your height" />
                </View>
                
            </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,   // Makes ScrollView take full height
      alignItems: "center", 
      padding: 20,
      backgroundColor: "#A8E6A3",
    },
    imageContainer: {
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 50,
      overflow: "hidden",
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "black",
      marginLeft: 15,
    },
    infoContainer: {
      width: "100%",
      paddingHorizontal: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
    },
    input: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
      marginBottom: 10,
    },
  });
  
  export default ProfileScreen;

