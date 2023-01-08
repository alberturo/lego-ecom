import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const image = {
  uri: "https://i.pinimg.com/736x/b9/58/6b/b9586b22edf6ce89f40d05821e943eef.jpg",
};

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <TouchableOpacity
          style={styles.productButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Products")}
        >
          <Text style={styles.productButtonText}>Go to products🚂</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  productButton: {
    width: "80%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20%",
    backgroundColor: "#F5D347",
    transform: [{ translateY: 200 }],
  },
  productButtonText: {
    color: "#000",
    fontSize: "20px",
    fontWeight: "bold",
  },
});
