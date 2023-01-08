import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <Text style={Styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 45,
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.ligth,
    fontSize: 16,
    fontWeight: "bold",
  },
});
