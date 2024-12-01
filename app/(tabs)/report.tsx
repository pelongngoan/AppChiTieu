import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ReportPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Báo cáo</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("MonthlyStatisticsScreen")}
      >
        <Text style={styles.cardTitle}>Thống kê hàng tháng</Text>
        <Text style={styles.cardDetails}>
          Chi tiêu: 20.000.000 | Thu nhập: 220.000.000
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("BudgetScreen")}
      >
        <Text style={styles.cardTitle}>Ngân sách hàng tháng</Text>
        <View style={styles.budgetDetails}>
          <Text style={styles.budgetText}>Còn lại: 50.000.000</Text>
          <Ionicons name="arrow-forward" size={20} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#black",
    padding: 20,
  },
  header: {
    backgroundColor: "#FFD948",
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#black",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardDetails: {
    fontSize: 14,
    color: "#555",
  },
  budgetDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  budgetText: {
    fontSize: 14,
    color: "#555",
  },
});
