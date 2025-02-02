import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DrinkScreen from "./DrinkScreen";

const events = [
  { id: "1", title: "Nikhita's Rat Street Bash", date: "Feb 2, 2025", time: "8:00 PM" },
  { id: "2", title: "Cocktail Tasting at Wabona's", date: "Feb 5, 2025", time: "7:30 PM" },
  { id: "3", title: "Kavin's Guys Night Out", date: "Feb 10, 2025", time: "6:30 PM" },
  { id: "4", title: "Ifemi's Movie Night", date: "Feb 14, 2025", time: "7:30 PM" },
  { id: "4", title: "Ife's Girlie Pop Night Out", date: "Feb 18, 2025", time: "9:30 PM" },

];

const EventScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>

      <View style={styles.listContainer}>
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

      {/* Add Event Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("CreateEvent")}
      >
        <Text style={styles.addButtonText}>Add Event</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  listContainer: {
    flex: 1, // Ensures the list takes up space but doesn't push the button off-screen
  },
  eventBlock: {
    backgroundColor: "#ffcc80",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: "90%",
    alignSelf: "center",
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
  addButton: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: [{ translateX: -75 }], // Center button
    backgroundColor: "#ff7043",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default EventScreen;
