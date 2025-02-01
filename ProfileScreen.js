import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from "react-native";

//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
//import AntDesignIcon from 'react-native-vector-icons/AntDesign';
//import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const ProfileScreen = () => {
    const [name, setName] = useState("John Doe")
    const [username, setUsername] = useState("johndoe123")
    const [email, setEmail] = useState("johnd@example.com")
    const [age, setAge] = useState("23")
    const [weight, setWeight] = useWeight("140 lbs")
    const [height, setHeight] = useHeight("5'11")

    return (
        <ScrollView style={styles.container}>
            {/* Profile Image */}
            <View style={styles.imageContainer}>
                <Image
                source={{ uri: "https://via.placeholder.com/100" }} // Placeholder image
                style={styles.profileImage}
                />
            </View>
        </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
   },
   email: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
   },
});

export default ProfileScreen;
