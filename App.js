import { StyleSheet, ImageBackground } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#B8829D", "#ddb52f"]}
      style={styles.mainContainer}
    >
      <ImageBackground
        style={styles.mainContainer}
        source={require("./assets/images/backgroundImage.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <HomeScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15,
  }
});
