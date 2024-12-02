import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function HomeScreen() {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to show the date picker
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  // Function to handle date selection
  const handleDateConfirm = (event, date) => {
    if (date) {
      setSelectedDate(date);
      console.log("Selected date:", date);
    }
    setDatePickerVisible(false); // Close the picker
  };

  // Dummy data for income/expenses
  const data = [
    { id: "1", description: "Lương mẹ", amount: 1000000 },
    { id: "2", description: "Đồ gia đình", amount: -20000 },
    { id: "3", description: "Lương bố", amount: 1000000 },
    { id: "4", description: "NDT → NDT", amount: 9000 },
    { id: "5", description: "Đồ ăn", amount: -20000 },
    { id: "6", description: "Nạp game", amount: -50000 },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={showDatePicker}>
          <Ionicons name="calendar" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sổ thu chi</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={25} color="black" />
        </TouchableOpacity>
      </View>

      {/* Summary Section */}
      <View style={styles.summary}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Chi tiêu</Text>
          <Text style={styles.summaryValue}>1,100.00$</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Thu nhập</Text>
          <Text style={styles.summaryValue}>121.00$</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Số dư</Text>
          <Text style={styles.summaryValue}>1,231.00$</Text>
        </View>
      </View>

      {/* List Section */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text
              style={[
                styles.itemAmount,
                { color: item.amount > 0 ? "#0B6623" : "#FF6347" },
              ]}
            >
              {item.amount.toLocaleString("vi-VN")} VND
            </Text>
          </View>
        )}
      />

      {/* Date Picker */}
      {isDatePickerVisible && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateConfirm}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    height: 60,
    backgroundColor: "#FFD948",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFD948",
    paddingVertical: 10,
  },
  summaryBox: {
    alignItems: "center",
  },
  summaryTitle: {
    fontSize: 14,
    color: "black",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  itemDescription: {
    fontSize: 16,
    color: "#0B6623",
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
