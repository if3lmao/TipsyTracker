import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrinkScreen from "./DrinkScreen"

const events = [
    { id: "1", title: "Nikhita's Rat Street Bash", date: "Feb 2, 2025", time: "8:00 PM" },
    { id: "2", title: "Cocktail Tasting", date: "Feb 5, 2025", time: "7:30pm"},
    { id: "3", title: "Kavin's Guys Night Out", date: "Feb 10, 2025", time: "6:30pm"},
];

const EventScreen = () => {
    const navigation = useNavigation();

    return(
        <View style = {styles.container}>
            <Text style={styles.header}> Upcoming Events</Text>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.eventBlock}
                      onPress={() => navigation.navigate("DrinkScreen")}
                    >
                      <Text style={styles.eventTitle}>{item.title}</Text>
                      <Text style={styles.eventDetails}>
                        {item.date} • {item.time}
                      </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f8f8f8",
              paddingTop: 20,
            },
            header: {
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 10,
            },
            eventBlock: {
              backgroundColor: "#ffcc80",
              padding: 15,
              borderRadius: 10,
              marginVertical: 8,
              width: "90%",
              alignItems: "center",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
            },
            eventTitle: {
              fontSize: 18,
              fontWeight: "bold",
            },
            eventDetails: {
              fontSize: 14,
              color: "#555",
              marginTop: 4,
            },
          });
          
  export default EventScreen;