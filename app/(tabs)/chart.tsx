import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function ChartScreen() {
  const [isMonthlyView, setIsMonthlyView] = useState(true);

  // Monthly and Yearly Data
  const monthlyData = [
    {
      name: "Quần áo",
      amount: 450000,
      color: "#00C49F",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Ăn uống",
      amount: 1000000,
      color: "#FFBB28",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Nạp game",
      amount: 50000,
      color: "#FF8042",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Xăng xe",
      amount: 500000,
      color: "#0088FE",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Thuê giúp việc",
      amount: 3500000,
      color: "#FF5733",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
  ];

  const yearlyData = [
    {
      name: "Quần áo",
      amount: 36638465.14,
      color: "#00C49F",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Ăn uống",
      amount: 8141881.2,
      color: "#FFBB28",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Nạp game",
      amount: 4070940.6,
      color: "#FF8042",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Xăng xe",
      amount: 12212821.83,
      color: "#0088FE",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
    {
      name: "Thuê giúp việc",
      amount: 12212821.83,
      color: "#FF5733",
      legendFontColor: "#333",
      legendFontSize: 12,
    },
  ];

  const chartData = isMonthlyView ? monthlyData : yearlyData;

  // Calculate total amount
  const totalAmount = chartData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chi tiêu</Text>
      </View>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.headerButton, isMonthlyView && styles.activeButton]}
          onPress={() => setIsMonthlyView(true)}
        >
          <Text
            style={isMonthlyView ? styles.activeButtonText : styles.buttonText}
          >
            Tháng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.headerButton, !isMonthlyView && styles.activeButton]}
          onPress={() => setIsMonthlyView(false)}
        >
          <Text
            style={!isMonthlyView ? styles.activeButtonText : styles.buttonText}
          >
            Năm
          </Text>
        </TouchableOpacity>
      </View>

      {/* Total Amount Section */}
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Tổng tiền</Text>
        <Text style={styles.totalAmount}>
          {totalAmount.toLocaleString("vi-VN", { minimumFractionDigits: 2 })}{" "}
          VND
        </Text>
        <Text style={styles.totalPercentage}>▲ 11.2%</Text>
      </View>

      {/* Pie Chart */}
      <PieChart
        data={chartData}
        width={Dimensions.get("window").width - 20}
        height={220}
        chartConfig={{
          backgroundColor: "#FFF",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />

      {/* Legend */}
      <FlatList
        data={chartData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColorBox, { backgroundColor: item.color }]}
            />
            <Text style={styles.legendText}>
              {item.name}: {item.amount.toLocaleString("vi-VN")} VND
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD948",
    height: 60,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  headerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: "#000",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
  activeButtonText: {
    fontSize: 16,
    color: "#FFF",
  },
  totalSection: {
    alignItems: "center",
    paddingVertical: 10,
  },
  totalText: {
    fontSize: 16,
    color: "#666",
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0B6623",
    marginTop: 5,
  },
  totalPercentage: {
    fontSize: 14,
    color: "#0B6623",
    marginTop: 5,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  legendColorBox: {
    width: 15,
    height: 15,
    borderRadius: 3,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: "#333",
  },
});
