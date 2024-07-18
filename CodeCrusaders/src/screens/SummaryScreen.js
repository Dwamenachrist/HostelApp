import React from "react";
import { 
    View, Text, StyleSheet, Image, 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";  // Assuming you have a custom Button component

const Summary = () => {
    return (
        <SafeAreaView style={styles.container}>
                  <View style={styles.hostel}>
                <Image 
                    source={require("../assets/makassela.png")} 
                    style={styles.hostelImage}
                />
                <View style={styles.hostelDetails}>
                    <Text style={styles.hostelName}>MB3 Hostel</Text>
                    <Text>1 in a room</Text>
                    <Text>GHc 10,000 /semester</Text>
                </View>
            </View>

            <View style={styles.bookingInfo}>
                <View style={styles.infoRow}>
                    <Text>Booking Date:</Text>
                    <Text>1-Oct-2023</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text>Check-in:</Text>
                    <Text>24-Oct-2023</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text>Check-out:</Text>
                    <Text>26-Oct-2023</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text>Room number:</Text>
                    <Text>2</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text>Room(s):</Text>
                    <Text>1</Text>
                </View>
            </View>

            <View style={styles.line} />

            <View style={styles.Amountcontainer}>
            <View style={styles.infoRow}>
                <Text>Amount</Text>
                <Text>$350 x 2</Text>
              </View>
              <View style={styles.infoRow}>
                <Text>Total</Text>
                <Text>$730</Text>
            </View>
            </View>

            <Button onPress={() => navigation.navigate('StudentSignUp')}>
            CONTINUE PAYMENT
            </Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    headingText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
    hostel: {
        flexDirection: "row",
        marginTop: 10,
    },
    hostelImage: {
        width: 100,
        height: 100,
    },
    hostelDetails: {
        marginLeft: 20,
    },
    hostelName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    bookingInfo: {
        marginTop: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5, 
    },
    line: {
        borderBottomColor: "#333333",
        borderBottomWidth: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    Amountcontainer: {
        flexDirection: 'column',
        justifyContent: "space-between",
        marginTop: 20,
    },
});

export default Summary;
