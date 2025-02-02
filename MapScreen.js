import React, { useCallback, useRef, useMemo } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import GestureHandlerRootView
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from "@gorhom/bottom-sheet";

const mockUsers = [
  // Users in the U.S.
  { id: 1, name: "Kavin", city: "San Franciso, CA", latitude: 37.78845, longitude: -122.4324, drinks: 3 }, // San Francisco, CA
  { id: 2, name: "Ife", city: "New York City, NY",latitude: 40.73061, longitude: -73.935242, drinks: 5 }, // New York City, NY
  { id: 3, name: "Nikhita", city: "Los Angeles, CA",latitude: 34.052235, longitude: -118.243683, drinks: 2 }, // Los Angeles, CA
  { id: 4, name: "Johnny", city: "Los Angeles, CA",latitude: 34.051235, longitude: -118.244783, drinks: 3 }, // Los Angeles, CA
  { id: 5, name: "Ifemi", city: "Chicago, IL",latitude: 41.8781, longitude: -87.6298, drinks: 4 }, // Chicago, IL
  { id: 6, name: "Wabona", city: "Dallas, TX",latitude: 29.7604, longitude: -95.3698, drinks: 6 }, // Houston, TX

  // LA peeps
  { id: 7, name: "Marcus", city: "Los Angeles, CA",latitude: 34.052400, longitude: -118.243500, drinks: 4 }, // LA
  { id: 8, name: "Ava", city: "Los Angeles, CA",latitude: 34.052405, longitude: -118.243495, drinks: 1 }, // LA 
  { id: 9, name: "Elena", city: "Los Angeles, CA",latitude: 34.052398, longitude: -118.243490, drinks: 5 }, // LA
  { id: 10, name: "Dylan", city: "Los Angeles, CA",latitude: 34.052403, longitude: -118.243485, drinks: 3 }, // LA
  
  // Users in Japan (example)
  { id: 11, name: "山田内巻き", city: "Tokyo, Japan",latitude: 36.2048, longitude: 138.2529, drinks: 2 }, // Japan 
  { id: 12, name: "Satoshi", city: "Tokyo, Japan ",latitude: 35.6895, longitude: 139.6917, drinks: 4 }, // Tokyo
];

const calculateBAC = (drinks) => (drinks * 0.02).toFixed(2); //bac calculation 

const SCREEN_HEIGHT = Dimensions.get("window").height;//device height 

const MapScreen = () => {
  return (
    <View style={styles.container}>
      {/* Map View (Top Half) */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,  
          longitude: -122.4324,
          latitudeDelta: 10, 
          longitudeDelta: 10,
        }}
      >
        {/* User Location Marker */}
        <Marker 
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="You"
          description="Your current location"
          pinColor="blue"
        />

        {/* Render all users on the map */}
        {mockUsers.map(user => (
          <Marker 
            key={user.id}
            coordinate={{ latitude: user.latitude, longitude: user.longitude }}
            title={user.name}
            description={`BAC: ${calculateBAC(user.drinks)}%`}
            pinColor="red" // Red markers for users
          />
        ))}
      </MapView>

      {/* User List (Bottom Half) */}
      <FlatList
        data={mockUsers}
  keyExtractor={(item) => item.id.toString()}
  style={styles.list}
  renderItem={({ item }) => {
    // Calculate BAC value
    const bac = calculateBAC(item.drinks);
    let bacColor = "#e63946";  // Default red color

    // Adjust color based on BAC value
    if (bac < 0.4) {
      bacColor = "green";
    } else if (bac >= 0.5 && bac < 1.0) {
      bacColor = "yellow";
    }

    return (
      <View style={styles.userCard}>
        <View>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userLocation}>{item.city} • 3 mi</Text>
        </View>
        {/* Apply the dynamic color */}
        <Text style={[styles.bacText, { color: bacColor }]}>
          {bac}% BAC
        </Text>
      </View>
    );
  }}
/>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },

  list: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingBottom: 30,  // Adding some padding to ensure content isn't cut off
  },
  userCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userLocation: {
    fontSize: 14,
    color: "#666",
  },
  bacText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e63946",
  },
});

export default MapScreen;