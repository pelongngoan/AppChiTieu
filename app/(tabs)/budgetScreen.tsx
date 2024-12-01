import { useNavigation } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BudgetScreen() {
  const budgets = [
    {
      category: "Di chuyển",
      remaining: "50.000.000",
      budget: "100.000.000",
      spent: "50.000.000",
    },
    {
      category: "Ăn uống",
      remaining: "30.000.000",
      budget: "70.000.000",
      spent: "40.000.000",
    },
    {
      category: "Mua sắm",
      remaining: "10.000.000",
      budget: "50.000.000",
      spent: "40.000.000",
    },
    {
      category: "Giải trí",
      remaining: "20.000.000",
      budget: "60.000.000",
      spent: "40.000.000",
    },
  ];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        {budgets.map((item, index) => (
          <View key={index} style={styles.budgetCard}>
            <Text style={styles.budgetTitle}>{item.category}</Text>
            <Text style={styles.budgetText}>Còn lại: {item.remaining}</Text>
            <Text style={styles.budgetText}>Ngân sách: {item.budget}</Text>
            <Text style={styles.budgetText}>Chi tiêu: {item.spent}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFD948",
  },
  budgetCard: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  budgetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  budgetText: {
    fontSize: 14,
    color: "#555",
  },
});
