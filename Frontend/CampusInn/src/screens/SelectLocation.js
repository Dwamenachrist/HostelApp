import { View, Text, Image } from 'react-native'
import React from 'react'

const SelectLocation = () => {
  return (
    <View style= {{flex: 1, alignItems: "center", }}>
      {/* Map Image and text on location */}
      <View style={{marginTop: 150, alignItems: "center", marginBottom: 100, }}>
      {/* <Image source={require("./assets/illustration.png")} /> */}
    <View style={{alignItems: "center", marginBottom: 50, justifyContent: "center"}}>
      <Text style={{color: "black", fontSize: 20, fontWeight:"bold", marginBottom: 15, marginTop: 40}}>Select Location</Text>
      <Text style={{color: "#7C7C7C", fontSize: 10, width: 28}}>Let’s find your next event. Stay in tune with 
      what’s happening in your area!</Text>
    </View>

      
    </View>
      
      {/* Choose city button */}
      <View style={{
        position: "absolute",
        bottom: 60,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0DCDAA",
        padding: 20,
        borderRadius: 10,
        marginLeft: 35,

      }}>
      <Text style={{color: "white", fontWeight: "bold"}}>Choose city</Text>

      </View>
    </View>
  )
}

export default SelectLocation;
