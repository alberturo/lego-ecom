import { createStackNavigator } from "@react-navigation/stack";
import Basket from "../screens/Basket";
import Products from "../screens/Products";
import BottomTab from "./BottomTap";

const HomeStack = createStackNavigator();

export default function MainStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="🧱Lego Store🪁"
        component={BottomTab}
        options={{
          headerBackgroundContainerStyle: true,
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: "30px",
          },
        }}
      />
      <HomeStack.Screen name="Products" component={Products} />
      <HomeStack.Screen
        name="Basket"
        component={Basket}
        options={{ presentation: "modal", headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
