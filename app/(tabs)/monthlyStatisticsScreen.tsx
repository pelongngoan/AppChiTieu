import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function MonthlyStatisticsScreen() {
  const data = [
    {
      month: "Tháng 11",
      spending: "20.000.000",
      income: "220.000.000",
      balance: "200.000.000",
    },
    {
      month: "Tháng 10",
      spending: "18.000.000",
      income: "200.000.000",
      balance: "182.000.000",
    },
    {
      month: "Tháng 9",
      spending: "25.000.000",
      income: "250.000.000",
      balance: "225.000.000",
    },
    {
      month: "Tháng 8",
      spending: "15.000.000",
      income: "180.000.000",
      balance: "165.000.000",
    },
    {
      month: "Tháng 7",
      spending: "22.000.000",
      income: "210.000.000",
      balance: "188.000.000",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Column Headers */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Tháng</Text>
        <Text style={styles.tableHeaderText}>Chi tiêu</Text>
        <Text style={styles.tableHeaderText}>Thu nhập</Text>
        <Text style={styles.tableHeaderText}>Số dư</Text>
      </View>

      {/* Data Rows */}
      <ScrollView>
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.row,
              index % 2 === 0 ? styles.rowEven : styles.rowOdd, // Alternate row colors
            ]}
          >
            <Text style={styles.cell}>{item.month}</Text>
            <Text style={styles.cell}>{item.spending}</Text>
            <Text style={styles.cell}>{item.income}</Text>
            <Text style={styles.cell}>{item.balance}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    height: 60,
    backgroundColor: "#FFD948",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#black",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFD948",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#black",
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  rowEven: {
    backgroundColor: "#fff",
  },
  rowOdd: {
    backgroundColor: "#f9f9f9",
  },
  cell: {
    fontSize: 14,
    color: "#555",
    flex: 1,
    textAlign: "center",
  },
});
