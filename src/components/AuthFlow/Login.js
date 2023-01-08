import { Button, Text, View } from "react-native";
import { useState } from "react";
import { globalStyles } from "../../styles/global";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../features/auth/auth";
import { signIn } from "../../features/auth/auth";
import { darkMode } from "../../theme/themeMode";

export default function Login({ onLogin, setEmail, setPassword }) {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  async function save(value) {
    try {
      await AsyncStorage.setItem("@token", value);
      dispatch(signIn(value));
      console.log("data saved");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Login</Text>
      <MyInput label={"Email"} onChangeText={setEmail} />
      <MyInput label={"Password"} secureTextEntry onChangeText={setPassword} />
      <MyButton title={"Sign In"} onPress={onLogin} />
      <Button
        title={"Sign Up"}
        onPress={() => dispatch(setAuthState("signUp"))}
      />
    </View>
  );
}
