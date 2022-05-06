import { TextInput, Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonDisplayContainer}>
        <View style={styles.singleButtonContainer}>
        <PrimaryButton> Reset </PrimaryButton>
        </View>
        <View style={styles.singleButtonContainer}>
        <PrimaryButton> Confirm</PrimaryButton>
        </View>        
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 20,
    backgroundColor: "#3b021f",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonDisplayContainer:{
      flexDirection:'row',
  },
  singleButtonContainer:{
      flex:1,
  },
});
