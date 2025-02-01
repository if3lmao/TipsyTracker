import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const mockUsers = [
  // Users in the U.S.
  { id: 1, name: "Ifemi", latitude: 37.78845, longitude: -122.4324, drinks: 3 }, // San Francisco, CA
  { id: 2, name: "Ife", latitude: 40.73061, longitude: -73.935242, drinks: 5 }, // New York City, NY
  { id: 3, name: "Nikhita", latitude: 34.052235, longitude: -118.243683, drinks: 2 }, // Los Angeles, CA
  { id: 4, name: "Johnny", latitude: 34.051235, longitude: -118.244783, drinks: 3 }, // Los Angeles, CA
  { id: 5, name: "Kavin", latitude: 41.8781, longitude: -87.6298, drinks: 4 }, // Chicago, IL
  { id: 6, name: "Wabona", latitude: 29.7604, longitude: -95.3698, drinks: 6 }, // Houston, TX

  // LA peeps
  { id: 7, name: "Marcus", latitude: 34.052400, longitude: -118.243500, drinks: 4 }, // LA
  { id: 8, name: "Ava", latitude: 34.052405, longitude: -118.243495, drinks: 1 }, // LA 
  { id: 9, name: "Elena", latitude: 34.052398, longitude: -118.243490, drinks: 5 }, // LA
  { id: 10, name: "Dylan", latitude: 34.052403, longitude: -118.243485, drinks: 3 }, // LA
  
  // Users in Japan (example)
  { id: 11, name: "山田内巻き", latitude: 36.2048, longitude: 138.2529, drinks: 2 }, // Japan 
  { id: 12, name: "Satoshi", latitude: 35.6895, longitude: 139.6917, drinks: 4 }, // Tokyo
];

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,  
          longitude: -122.4324,
          latitudeDelta: 0.015, 
          longitudeDelta: 0.0121,
        }}
      >
        {/* User Location Marker */}
        <Marker 
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="You"
          description="Your current location"
          pinColor="blue"
        />

        {/* Render multiple mock users on the map */}
        {mockUsers.map(user => (
          <Marker 
            key={user.id}
            coordinate={{ latitude: user.latitude, longitude: user.longitude }}
            title={user.name}
            description={`Drinks: ${user.drinks}`}
            pinColor="red" // Red markers for users
          />
        ))}
      </MapView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default MapScreen;