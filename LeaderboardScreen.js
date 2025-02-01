import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native';

//Mock data for leaderboard
const LeaderboardScreen = () => {
  const [leaderboardData] = useState([
    { id: '1', name: 'Nikhita', drinks: 2, profilePic: 'https://static.vecteezy.com/system/resources/previews/009/637/570/non_2x/red-wine-drink-glass-cute-cartoon-file-png.png' },
    { id: '2', name: 'Ifemi', drinks: 3, profilePic: 'https://static.vecteezy.com/system/resources/previews/009/637/570/non_2x/red-wine-drink-glass-cute-cartoon-file-png.png' },
    { id: '3', name: 'Kavin', drinks: 4, profilePic: 'https://static.vecteezy.com/system/resources/previews/009/637/570/non_2x/red-wine-drink-glass-cute-cartoon-file-png.png' },
    { id: '4', name: 'Ife', drinks: 5, profilePic: 'https://static.vecteezy.com/system/resources/previews/009/637/570/non_2x/red-wine-drink-glass-cute-cartoon-file-png.png' },
    { id: '5', name: 'Wabona', drinks: 6, profilePic: 'https://static.vecteezy.com/system/resources/previews/009/637/570/non_2x/red-wine-drink-glass-cute-cartoon-file-png.png' },
  ]);

  //Mock data for safety reminders
  const safetyReminders = [
    'Drink water between alcoholic drinks to stay hydrated!',
    'Pace yourself: Drink no more than one standard drink per hour.',
    'Don’t mix alcohol with prescription medication or other substances.',
    'Don’t drink and drive – Always have a safe ride home!',
    'Know your limits and don’t feel pressured to drink more.',
    'Make sure you eat before drinking to avoid over-consumption.',
    'Always drink responsibly and know your limits.',
    'It’s okay to say no to another drink if you feel uncomfortable.',
    'If you’re feeling unwell, stop drinking and seek help if necessary.',
    'Monitor your drink to ensure it’s not tampered with.',
    'If you’re in a group, look out for each other and be aware of everyone’s condition.',
    'If you need help, don’t hesitate to call a friend or a taxi.',
    'Plan ahead for transportation-don’t drive under the influence.'
  ];

  const [currentReminderIndex, setCurrentReminderIndex] = useState(0);

  //Function to get a new tip everytime the button is clicked
  const getNewReminder = () => {
    const randomIndex = Math.floor(Math.random() * safetyReminders.length);
    setCurrentReminderIndex(randomIndex);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>

      {/* Safety Reminder Section */}
      <View style={styles.reminderContainer}>
        <Text style={styles.reminderText}>{safetyReminders[currentReminderIndex]}</Text>
        <Button title="Click for more Safety Tips" onPress={getNewReminder} />
      </View>

      {/* Leaderboard List -- Rank, name, profile picture, score/number of drinks */}
      <FlatList
        data={leaderboardData}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.rank}>{index + 1}.</Text>
            <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.drinks}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reminderContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  reminderText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rank: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  name: {
    flex: 1,
  },
  score: {
    fontWeight: 'bold',
    textAlign: 'right',
    minWidth: 50,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
});

export default LeaderboardScreen;
