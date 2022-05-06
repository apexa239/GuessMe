import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton(props) {
  function pressHandler(){
    console.log('pressed!')
  }
  return (
    
      <View style={styles.buttonOuterContainer}>
        <Pressable 
        style={({pressed})=> pressed 
        ? [styles.buttonPressed, styles.buttonInnerContainer]
        :styles.buttonInnerContainer} 
        onPress={pressHandler}
        android_ripple={{color: '#9C5076'}}>
        <Text style={styles.buttonText}>{props.children}</Text>
        </Pressable>
      </View>
  
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
buttonOuterContainer:{
  borderRadius:28,
  margin:8,
  overflow:'hidden',
},

buttonInnerContainer:{
  backgroundColor:"#B8829D",  
  paddingVertical:8,
  paddingHorizontal:16,

},
buttonText:{
  color:'white',
  textAlign:'center',
  fontWeight:'600',
},
buttonPressed:{
  opacity:0.75,
},
});
