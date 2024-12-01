import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AddScreen() {
  const [amount, setAmount] = useState("0");
  const [group, setGroup] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Tiền mặt");
  const [showCalculator, setShowCalculator] = useState(false);
  const [showGroupSelector, setShowGroupSelector] = useState(false);

  const groups = [
    { id: 1, name: "Ăn uống" },
    { id: 2, name: "Bảo hiểm" },
    { id: 3, name: "Các chi phí khác" },
    { id: 4, name: "Đầu tư" },
    { id: 5, name: "Di chuyển" },
    { id: 6, name: "Bảo dưỡng xe" },
    { id: 7, name: "Gia đình" },
  ];

  const handleAmountInput = (num: any) => {
    if (num === "C") {
      setAmount("0");
    } else if (num === "back") {
      setAmount(amount.slice(0, -1) || "0");
    } else {
      setAmount((prev) => (prev === "0" ? num : prev + num));
    }
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.headerText}>Hủy</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Thêm</Text>
        <TouchableOpacity>
          <Entypo name="news" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Amount Input */}
      <TouchableOpacity
        style={styles.row}
        onPress={() => setShowCalculator(true)}
      >
        <Text style={styles.label}>VND</Text>
        <Text style={styles.value}>{amount}</Text>
      </TouchableOpacity>

      {/* Group Selector */}
      <TouchableOpacity
        style={styles.row}
        onPress={() => setShowGroupSelector(true)}
      >
        <Text style={styles.label}>Chọn nhóm</Text>
        <Text style={styles.value}>{group || "?"}</Text>
      </TouchableOpacity>

      {/* Date Picker */}
      <TouchableOpacity
        style={styles.row}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.label}>Hôm nay</Text>
        <Text style={styles.value}>
          {date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </Text>
      </TouchableOpacity>

      {/* Payment Method */}
      <TouchableOpacity
        style={styles.row}
        onPress={() =>
          setPaymentMethod(
            paymentMethod === "Tiền mặt" ? "Ngân hàng" : "Tiền mặt"
          )
        }
      >
        <Text style={styles.label}>Tiền mặt</Text>
        <Text style={styles.value}>{paymentMethod}</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Lưu</Text>
      </TouchableOpacity>

      {/* Calculator Modal */}
      <Modal visible={showCalculator} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.calculator}>
            <View style={styles.amountDisplay}>
              <Text style={styles.amountText}>{amount}</Text>
            </View>
            <View style={styles.calculatorButtons}>
              {[
                "7",
                "8",
                "9",
                "4",
                "5",
                "6",
                "1",
                "2",
                "3",
                "0",
                "000",
                "C",
              ].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={styles.calculatorButton}
                  onPress={() => handleAmountInput(num)}
                >
                  <Text style={styles.calculatorButtonText}>{num}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                style={styles.calculatorButton}
                onPress={() => handleAmountInput("back")}
              >
                <Text style={styles.calculatorButtonText}>←</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.calculatorButton}
                onPress={() => setShowCalculator(false)}
              >
                <Text style={styles.calculatorButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Group Selector Modal */}
      <Modal visible={showGroupSelector} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.groupSelector}>
            <FlatList
              data={groups}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.groupItem}
                  onPress={() => {
                    setGroup(item.name);
                    setShowGroupSelector(false);
                  }}
                >
                  <Text style={styles.groupText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowGroupSelector(false)}
            >
              <Text style={styles.closeButtonText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Date Picker */}
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) setDate(selectedDate);
          }}
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
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  value: {
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    margin: 20,
    backgroundColor: "#FFD948",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  calculator: {
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 10,
    padding: 20,
  },
  amountDisplay: {
    alignItems: "center",
    marginBottom: 10,
  },
  amountText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  calculatorButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  calculatorButton: {
    width: "30%",
    padding: 15,
    backgroundColor: "#EEE",
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  calculatorButtonText: {
    fontSize: 18,
    color: "#333",
  },
  groupSelector: {
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 10,
    padding: 20,
  },
  groupItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  groupText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#FFD948",
    alignItems: "center",
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
