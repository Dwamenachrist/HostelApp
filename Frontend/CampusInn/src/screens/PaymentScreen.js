import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

import Button from "../components/Button";

const Payment = ({navigation}) => {

  const onPayNowPressed = () => {
    // Add your actual login logic here
    console.log("Pay button pressed!");
    // After successful login, navigate to Home
    navigation.navigate("BackCongratualtion");
  }

  return (
    <View style={{flex:1}} >
      <View style={styles.totalContainer}>
        <Text style={styles.totalPrice}>Total Price</Text>
        <Text style={styles.totalAmount}>$750.00</Text>
        <Text style={styles.vatInfo}>5% vat included</Text>
      </View>

      <View style={styles.container}>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentMethodText}>Payment method</Text>
        <View style={styles.paymentMethods}>
          <Image
            source={require("../assets/master.png")}
            style={styles.paymentMethodIcon}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/visa.png")}
            style={[styles.paymentMethodIcon, styles.visaIcon]}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/mtn.png")}
            style={styles.paymentMethodIcon}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/telecel.png")}
            style={[styles.paymentMethodIcon, styles.telecelIcon]}
            resizeMode="contain"
          />
        </View>

        <TextInput style={styles.input} placeholder="Card Holder Name" />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
        />
        <View style={styles.expiryCvvContainer}>
          <TextInput
            style={styles.expiryInput}
            placeholder="MM/YY"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.cvvInput}
            placeholder="CVV"
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </View>
        
        <Button 
         onPress={onPayNowPressed}
        >
          <Text style={styles.payButtonText}>PAY NOW</Text>
        </Button>
        </View>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  totalContainer: {
    alignItems: "center",
    backgroundColor: "#e0f0fd",
    paddingVertical: 30,
    marginBottom: 'auto',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007bff",
    marginVertical: 5,
  },
  vatInfo: {
    color: "gray",
  },
  paymentContainer: {
    padding: 20,
  },
  paymentMethodText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  paymentMethods: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  paymentMethodIcon: {
    width: 50,
    height: 30,
  },
  visaIcon: {
    width: 70,
  },
  telecelIcon: {
    width: 60,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  expiryCvvContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expiryInput: {
    flex: 1,
    marginRight: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  cvvInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  payButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  payButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});