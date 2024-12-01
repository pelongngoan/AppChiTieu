import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define the navigation stack
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Tabs: undefined; // Add the Tabs screen here
};

// Define navigation prop type
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginPage() {
  const navigation = useNavigation<LoginScreenNavigationProp>(); // Typed navigation

  const handleLogin = () => {
    // Perform login validation here
    const isValid = true; // Replace with actual validation logic

    if (isValid) {
      navigation.navigate("Tabs"); // Navigate to Tabs after successful login
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.logo}
      />
      <Text style={styles.appName}>CHI TIÊU 88</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        placeholderTextColor="#9A9A9A"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#9A9A9A"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerLink}>Chưa có tài khoản? Đăng ký.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0B6623",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#EAEAEA",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 10,
    fontSize: 16,
  },
  registerLink: {
    color: "#0B6623",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#0B6623",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
