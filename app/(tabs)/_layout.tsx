import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Screens
import ProfilePage from "./profile";
import ReportPage from "./report";
import AddPage from "./add";
import HomeScreen from ".";
import ChartScreen from "./chart";
import MonthlyStatisticsScreen from "./monthlyStatisticsScreen";
import BudgetScreen from "./budgetScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabsLayout() {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);

  const handleDateConfirm = (date: any) => {
    setSelectedDate(date);
    setDatePickerVisible(false);
    console.log("Selected date:", date);
  };

  const ReportStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FFD948" }, // Apply yellow background
        headerTintColor: "#black", // White text
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="ReportMain"
        component={ReportPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MonthlyStatisticsScreen"
        component={MonthlyStatisticsScreen}
        options={{ title: "Thống kê hàng tháng" }}
      />
      <Stack.Screen
        name="BudgetScreen"
        component={BudgetScreen}
        options={{ title: "Ngân sách" }}
      />
    </Stack.Navigator>
  );

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chart"
          component={ChartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="piechart" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Report"
          component={ReportStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="clipboard" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>

      {/* Date Picker Modal */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={selectedDate || new Date()}
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
}
