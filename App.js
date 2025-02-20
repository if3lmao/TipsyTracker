import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MapScreen from './MapScreen';
import ProfileScreen from './ProfileScreen';
import LeaderboardScreen from './LeaderboardScreen';
import EventScreen from './EventScreen';
import DrinkScreen from "./DrinkScreen"
import ResourcesScreen from './ResourcesScreen';
import CreateEvent from './CreateEvent';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function EventStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventScreen}/>
      <Stack.Screen name="DrinkScreen" component={DrinkScreen} options={{ title: "Log Your Drink" }} />
      <Stack.Screen name ="CreateEvent" component={CreateEvent}/>
    </Stack.Navigator>
  );
}


//Alert for user that someone hasn't been moving
function showAlert() {
  alert("Wabona hasn't moved! Make sure to check in on your friend.");
}
//Periodic notification to check in with user periodically
function showNotification() {
  alert("Periodic check-in to make sure you're okay!");
}

setTimeout(() => {
  showAlert();
}, 120000); //120000 ms == 2 mins | goes off once in 2 minutes


setInterval(() => {
  showNotification();
}, 600000); //300000 ms == 10 mins | will go off every 10 minutes


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
        <Tab.Screen name="Events" component={EventStack} />
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

