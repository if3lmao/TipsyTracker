import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Alert, StyleSheet, Modal, ScrollView } from "react-native";


const DrinkScreen = () => {
  // State to track drink quantities
  const [quantities, setQuantities] = useState({
    cocktail: 0,
    beer: 0,
    liquor: 0,
    seltzer: 0,
    nonalcoholic: 0,
  });

  const [friends, setFriends] = useState([]);
  const [friendInput, setFriendInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // Controls pop-up visibility
  const [confirmVisible, setConfirmVisible] = useState(false); // Controls confirmation pop-up
  const [addedFriend, setAddedFriend] = useState(""); // Tracks the last added friend
  const [partyModalVisible, setPartyModalVisible] = useState(false); // Party members modal

  // Function to add a friend
  const addFriend = () => {
    if (friendInput.trim() === "") {
      Alert.alert("Error", "Please enter a username.");
      return;
    }

    setFriends([...friends, friendInput]); // Add to friends list
    setFriendInput(""); // Clear input field
    setModalVisible(false); // Close modal
    setConfirmVisible(true); // Show confirmation modal
    
    setAddedFriend(friendInput); // Store for confirmation
  };

  // Function to handle button press (decrement count)
  const handlePress = (drink) => {
    setQuantities((prev) => ({
      ...prev,
      [drink]: prev[drink] + 1, // Prevent negative values
    }));
  };

  return (
    <View style={styles.container}>
    {/* Button to open friend input modal */}
    <TouchableOpacity style={styles.addFriendButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addFriendButtonText}>+ Add Friend</Text>
      </TouchableOpacity>

      {/* Modal for entering a friend's username */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Friend's Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={friendInput}
              onChangeText={setFriendInput}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton} onPress={addFriend}>
                <Text style={styles.confirmButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      {/* Confirmation Modal (This replaces the Alert) */}
      <Modal visible={confirmVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.okButtonText}>{addedFriend} has been added to the party! 🎉</Text>
            <TouchableOpacity style={styles.okButton} onPress={() => setConfirmVisible(false)}>
              <Text style={styles.okButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* "View Party Members" Button */}
      <TouchableOpacity style={styles.viewPartyButton} onPress={() => setPartyModalVisible(true)}>
        <Text style={styles.viewPartyButtonText}>View Party Members</Text>
      </TouchableOpacity>

        {/* Party Members Modal */}
        <Modal visible={partyModalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Party Members 🎉</Text>
                    <ScrollView style={styles.partyList}>
                    {friends.length > 0 ? (
                        friends.map((friend, index) => (
                        <Text key={index} style={styles.partyMember}>{friend}</Text>
                        ))
                    ) : (
                        <Text style={styles.noPartyMembers}>No friends added yet.</Text>
                    )}
                    </ScrollView>
                    <TouchableOpacity style={styles.okButton} onPress={() => setPartyModalVisible(false)}>
                      <Text style={styles.okButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>

      {/* Grid Layout */}
      <View style={styles.grid}>
        {/* Cocktail */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("cocktail")}>
          <Image source={require("./drinks/cocktail.png")} style={styles.image} />
          <Text style={styles.quantity}>Count: {quantities.cocktail}</Text>
        </TouchableOpacity>

        {/* Beer */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("beer")}>
          <Image source={require("./drinks/beer.png")} style={styles.image} />
          <Text style={styles.quantity}>Count: {quantities.beer}</Text>
        </TouchableOpacity>

        {/* Liquor */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("liquor")}>
          <Image source={require("./drinks/liquor.png")} style={styles.image} />
          <Text style={styles.quantity}>Count: {quantities.liquor}</Text>
        </TouchableOpacity>

        {/* Seltzer */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("seltzer")}>
          <Image source={require("./drinks/seltzer.png")} style={styles.image} />
          <Text style={styles.quantity}>Count: {quantities.seltzer}</Text>
        </TouchableOpacity>

        {/* Non-Alcoholic Drinks */}
        <TouchableOpacity style={styles.button} onPress={() => handlePress("nonalcoholic")}>
          <Image source={require("./drinks/nonalcoholic.png")} style={styles.image} />
          <Text style={styles.quantity}>Count: {quantities.nonalcoholic}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#A8E6A3",
    padding: 20,
    justifyContent: "center",
  },
  addFriendButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 5,
  },
  addFriendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  confirmationText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    backgroundColor: "#ff6666",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  okButton: {
    backgroundColor: "#4CAF50", // Keep it green
    paddingVertical: 15, // Increase padding for better clickability
    paddingHorizontal: 30,
    borderRadius: 8, // Rounded corners
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    width: 90, // Increase width
    height: 50, // Increase height
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  confirmButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  okButtonText: {
    color: "black", // Ensure white text for contrast
    fontSize: 16, // Make text bigger
    fontWeight: "bold",
    textAlign: "center",
  },
  grid: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    margin: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 80,
  },
  quantity: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  viewPartyButton: {
    marginTop: 20,
    backgroundColor: "#FFA726",
    padding: 12,
    borderRadius: 5,
  },
  viewPartyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  partyList: {
    maxHeight: 200,
    width: "100%",
  },
  partyMember: {
    fontSize: 16,
    textAlign: "center",
    padding: 5,
  },
  noPartyMembers: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    padding: 10,
  },
});

export default DrinkScreen;
