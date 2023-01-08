import { TextInput, Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function MyInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={Styles.container}>
      <TextInput
        placeholder={label}
        // style={Styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 45,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    backgroundColor: Colors.ligth,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
