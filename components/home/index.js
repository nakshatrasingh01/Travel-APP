import { useEffect, useState } from "react";
import { View,Text,SafeAreaView,StatusBar } from "react-native"; 

import { StyleSheet } from "react-native";







function Home(props){
    const[Initial,setIntial]=useState(props.text);
    useEffect(()=>{
      setTimeout(()=>{
        setIntial("goodMorning")
      },4000);
      console.log("i am a developer");
     
    },[]);
    setState =() =>{
      setIntial("fuck off!");
    }
    

    return(
        <SafeAreaView style={styles.safA}>
        <View style={styles.container}>
          <Text style={styles.text} onPress={setState}>{Initial}</Text>
          <StatusBar style="auto" />
        </View>
        </SafeAreaView>
    )
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:"auto",
    marginTop:"auto",
  },
  safA:{
    flex:1,
    backgroundColor:"lightyellow"
  },
  text:{
    color:"black",
    fontSize:60,
    fontWeight:"bold"
  }
});


