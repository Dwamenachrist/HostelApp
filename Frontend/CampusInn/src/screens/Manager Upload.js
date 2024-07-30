import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const ManagerUpload = ({navigation}) => {
  return (
    <View style={styles.contentContainer}>
      <Image
          source={require("../assets/connect.png")}
          style={styles.Top}
        />
      <Text style={styles.header}>Part as a Hostel Manager</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
			navigation.navigate("UploadHostelScreen")
        }}
      >
        <Image
          source={require("../assets/Upload.png")}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Manage")
        }}
      >
        <Image
          source={require("../assets/Manage.png")}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
	  <Image
          source={require("../assets/connect.png")}
          style={styles.Down}
        />
    </View>
  );
};

export default ManagerUpload;

const styles = StyleSheet.create({
  Top: {
    width: "150%",
    height: 50,
	marginBottom: 'auto',
  },
  Down :{
	width: "150%",
    height: 50,
	marginTop: 'auto',
  },
  contentContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginBottom: 20,
    alignItems: "center",
  },
  buttonImage: {
    height: 200,
    width: 350,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    bottom: 10,
  },
});