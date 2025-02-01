import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// Screens
import MapScreen from './MapScreen';
import ProfileScreen from './ProfileScreen';
import LeaderboardScreen from './LeaderboardScreen';
import EventScreen from './EventScreen';
import DrinkScreen from "./DrinkScreen"

const ResourcesScreen = () => (
  <View style={styles.container}>
    <Text>This is my resources</Text>
  </View>
);

function EventStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventScreen} options={{ title: "Tipsy Tracker" }} />
      <Stack.Screen name="DrinkScreen" component={DrinkScreen} options={{ title: "Log Your Drink" }} />
    </Stack.Navigator>
  );
}
// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Events' // Default start page to events
        screenOptions={({ route }) => ({
          headerTitle: "Tipsy Tracker",
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Map') {
              return <FontAwesomeIcon name="map" size={size} color={color} />;
            } else if (route.name === 'Leaderboard') {
              return <FontAwesomeIcon name="trophy" size={size} color={color}/>;
            } else if (route.name === 'Events') {
              return <AntDesignIcon name="pluscircleo" size={size} color={color} />;
            } else if (route.name === 'Resources') {
              return <FontAwesomeIcon name="handshake-o" size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return <FontAwesomeIcon name="user" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'darkseagreen',
          inactiveTintColor: 'grey',
        }}
      >
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Tab.Screen name="Events" component={EventScreen} />
        <Tab.Screen name="Resources" component={ResourcesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = {
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
};

