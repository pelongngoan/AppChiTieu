import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./login";
import RegisterPage from "./register";
import TabsLayout from "./(tabs)/_layout"; // Import Tabs layout

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{ title: "Đăng ký tài khoản" }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabsLayout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
