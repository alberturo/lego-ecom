import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import Home from "../screens/Home";
import Products from "../screens/Products";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/addToCart/addToCart";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const items = useSelector(selectCartItems);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-bag" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "tomato", color: Colors.ligth },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
