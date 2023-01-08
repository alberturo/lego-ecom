import { Button, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../features/auth/auth";

export default function SignUp({ onSignUp, setEmail, setPassword }) {
  const dispatch = useDispatch();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label="Email" onChangeText={setEmail} />
      <MyInput label="Password" secureTextEntry onChangeText={setPassword} />
      <MyButton title="Sign Up" onPress={onSignUp} />
      <Button
        title={"Sign In"}
        onPress={() => dispatch(setAuthState("signIn"))}
      />
    </View>
  );
}
