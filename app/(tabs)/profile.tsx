import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol"; // assuming this is a custom component for icons
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const role = "admin"; // Example role, this can be dynamic (admin or user)
  const navigation = useNavigation();

  const handleLogout = () => {
    // Your logout logic goes here, e.g., clearing session, navigating to login screen
    console.log("Logged out!");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Profile Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Role Cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.card}>
            <IconSymbol name="shield" size={40} color="#FFD948" />
            <Text style={styles.cardTitle}>Admin Role</Text>
            <Text style={styles.cardDescription}>
              You have full access to all admin features.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.card}>
            <IconSymbol name="u.square" size={40} color="#FFD948" />
            <Text style={styles.cardTitle}>User Role</Text>
            <Text style={styles.cardDescription}>
              You have limited access to features.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD948",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  cardContainer: {
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3, // for Android shadow
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  logoutButton: {
    backgroundColor: "#FF4D4D",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
