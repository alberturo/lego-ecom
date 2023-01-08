import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreToken } from "../features/auth/auth";
import Splash from "../screens/Splash";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function RootNavigator() {
  const { userToken } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(restoreToken(user.email));
      } else {
        console.log("user is not authenticated");
      }
      setIsLoading(false);
    });
    return unsubscribeAuth;
  }, []);

  // useEffect(() => {
  //   getValue();
  // }, []);

  async function getValue() {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        console.log("data restored", value);
        dispatch(restoreToken(value));
      } else {
        console.log("no data");
        dispatch(restoreToken(null));
      }
    } catch (err) {
      console.log(err);
    }
  }
  if (isLoading) return <Splash />;
  return (
    <NavigationContainer>
      {userToken ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
